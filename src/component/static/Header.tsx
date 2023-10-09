import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Head = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        <NavLink to="/" style={{textDecoration: "none"}}>
        <Image>
          Daniel
        </Image>
        </NavLink>

        <Navholder>
          <Nav>Home</Nav>
          <Nav>About</Nav>
          <Nav>Contact</Nav>
          <Nav></Nav>
        </Navholder>

        <NavLink to = "/sign-in"style={{textDecoration: "none"}}>
        <Button>
          Get started
        </Button>
        </NavLink>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Head;
const Button =styled.div`
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
`
const Nav = styled.div`
  font-size: 25px;
  &:hover{
    cursor: pointer;
    transform: scale(0.98);
    margin-left: 5px;
    color: #f15a22;
  }
`
const Navholder= styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-between;
`;

const pulseAnimation = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.08);
  }
  100%{
    transform: scale(1);
  }
`

const Image= styled.div`
  font-size: 25px;
  font-weight: bold;
  animation: ${pulseAnimation} 2s infinite;

`
const Wrapper = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container= styled.div`
  background-color: cyan;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
