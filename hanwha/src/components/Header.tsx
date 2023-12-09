import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menu } from '../dummy/menu';

const DepthContainer = styled.div`
  background: #fff;
  border-bottom: 3px solid black;
  display: flex;
  height: 60px;
  line-height: 60px;

  li {
    text-align: center;
    width: 150px;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  min-width: 250px;
  padding-left: 10px;
`;
const Depth1 = styled.ul`
  display: flex;

  li {
    font-weight: bold;
    width: 150px;
  }
`;
const Depth2 = styled.div`
  background: #e8e8e8;
  display: block;
  height: 0px;
  left: 0;
  overflow: hidden;
  position: absolute;
  padding-left: 260px;
  top: 63px;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 5;
  ul {
    display: inline-block;
    float: left;
  }
`;

const Depth2Item = styled.li`
  &:hover {
    background: cornflowerblue;
    color: white;
    font-weight: bold;
    transition: 0.5s;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DepthContainer
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(true);
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(false);
        }}
      >
        <Depth1>
          <Logo>
            <Link to="/">LOGO</Link>
          </Logo>
          {menu?.map((menuItem, i) => {
            return (
              <li key={i}>
                {menuItem.title}
                <Link to={`${menuItem.path}`} />
              </li>
            );
          })}
        </Depth1>

        <Depth2 className="depth2" style={{ height: open ? '300px' : '0px' }}>
          {menu.map((menuItem, i) => {
            return (
              <ul key={i}>
                {menuItem.list.map((item, j) => {
                  return (
                    <Depth2Item key={j}>
                      <Link to={`${item.path}`}>{item.title}</Link>
                    </Depth2Item>
                  );
                })}
              </ul>
            );
          })}
        </Depth2>
      </DepthContainer>
    </>
  );
};
export default Header;
