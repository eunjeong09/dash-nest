import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Sport } from '../type/dummy';
import Board from './Board';

const Card = styled.div`
  width: 50%;
  min-height: 500px;
`;

const SportList = styled.div`
  max-height: 350px;
  overflow-y: scroll;

  p {
    font-weight: bold;
  }
  span {
    margin-left: 30px;
  }
`;

// 로그인 유무 확인
// 토큰확인 후 sign-in으로 넘기는 기능이 필요함
const Dashboard = () => {
  const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
  const [sportsData, setSportsData] = useState<Sport[]>([]);

  useEffect(() => {
    const getSports = async () => {
      try {
        const response = await axios.get(
          'https://odds.p.rapidapi.com/v4/sports',
          {
            params: { all: 'true' },
            headers: {
              'X-RapidAPI-Key': RAPID_API_KEY,
              'X-RapidAPI-Host': 'odds.p.rapidapi.com',
            },
          },
        );
        // 성공 핸들링
        setSportsData(response.data);
      } catch (error) {
        // 에러 핸들링
        console.log(error);
      }
    };

    getSports();
  }, [RAPID_API_KEY]);

  return (
    <>
      <div className="row">
        <Card style={{ width: '40%' }}>
          <h2>Live Sports Odds</h2>
          <SportList>
            {sportsData.map((sport) => (
              <div key={sport.key}>
                <p>{sport.title}</p>
                <span> : {sport.description}</span>
              </div>
            ))}
          </SportList>
        </Card>
        <Card style={{ width: '60%' }}>
          <Board />
        </Card>
      </div>
      <div className="row">
        <Card>
          <h4>dashboard3</h4>
        </Card>
        <Card>
          <h4>dashboard4</h4>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
