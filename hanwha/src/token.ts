import axios from 'axios';
const storage = localStorage.getItem('accessToken');

async function checkExpired(accessToken: string | null) {
  if (accessToken === null) return true;
  const temp = { token: accessToken };

  try {
    const response = await axios.post(
      'http://localhost:3000/auth/expired',
      temp,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // 정상 동작하지 않아서 주석처리
    // if (response.data) {
    //   localStorage.removeItem('accessToken');
    // }
    return response.data;
  } catch (error: any) {
    console.error('API 요청 중 오류 발생:', error);
    return false;
  }
}

export const expired = async (): Promise<boolean> => {
  return await checkExpired(storage);
};
