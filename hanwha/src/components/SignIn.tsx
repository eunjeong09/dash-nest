import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  display: block;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;

const Button = styled.input`
  padding: 20px;
`;

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();
  const onSubmit = async (data: any) => {
    reset();
    if (isSignIn) {
      try {
        const response = await axios.post(
          'http://localhost:3000/auth/login',
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.data) {
          localStorage.setItem('accessToken', response.data.accessToken);
          window.location.href = '/';
        }
      } catch (error: any) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            alert('Invalid credentials');
          }
        }
        console.error('API 요청 중 오류 발생:', error);
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:3000/auth/join',
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.data === true) {
          alert('회원가입이 완료되었습니다. 로그인해주세요!');
          setIsSignIn(true);
        }
      } catch (error: any) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          if (axiosError.response.status === 409) {
            alert('이메일이 이미 사용 중입니다.');
          }
        }
        console.error('API 요청 중 오류 발생:', error);
      }
    }
  };

  return (
    <Container>
      {isSignIn ? (
        <>
          <h1>로그인</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email', { required: '이메일을 입력하세요' })}
              placeholder="이메일"
            />

            <Input
              {...register('password', { required: '비밀번호를 입력하세요' })}
              placeholder="비밀번호"
            />

            <Button type="submit" disabled={!isValid} />
          </form>
          <p>
            아직 회원이 아니신가요?
            <span
              className="bold underline"
              onClick={() => {
                setIsSignIn(false);
              }}
            >
              회원가입
            </span>
          </p>
        </>
      ) : (
        <>
          <h1>회원가입</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('username', { required: '이름을 입력하세요' })}
              placeholder="이름"
            />

            <Input
              {...register('email', { required: '이메일을 입력하세요' })}
              placeholder="이메일"
            />

            <Input
              {...register('password', { required: '비밀번호를을 입력하세요' })}
              placeholder="비밀번호"
            />

            <Button type="submit" disabled={!isValid} />
          </form>
          <p
            className="bold underline"
            onClick={() => {
              setIsSignIn(true);
            }}
          >
            로그인으로 돌아가기
          </p>
        </>
      )}
    </Container>
  );
};
export default SignIn;
