import styled from 'styled-components';

const Container = styled.div`
  border-top: 3px solid black;
  bottom: 0px;
  padding: 0px 20px;
  position: fixed;
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <p>문의사항이 있으시면 언제든지 연락 주세요. 전화번호: 010-9985-6676</p>
      <p>© 2023 Project</p>
    </Container>
  );
};
export default Footer;
