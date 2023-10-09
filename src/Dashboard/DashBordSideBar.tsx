import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FaAngleRight} from "react-icons/fa"

const DashBordSideBar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to ="/">
          <Image>
            <Pic src ="https://demo.dashboardpack.com/marketing-html/img/logo.png"/>
          </Image>
          </NavLink>

          <NavHolder>
            <Nav>
              <Icon>
                <img src="https://demo.dashboardpack.com/marketing-html/img/menu-icon/dashboard.svg"/>
              <Text>DashBoard</Text>
              </Icon>
              <Arrow>
                <FaAngleRight/>
              </Arrow>
            </Nav>
          </NavHolder>
        </Wrapper>
      </Container>
    </div>
  )
}

export default DashBordSideBar;
const Text = styled.div`
  margin-left: 8px;

`
const Arrow = styled.div`
  margin-top: 5px;
`
const Icon = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`
const Nav = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavHolder= styled.div``
const Pic= styled.img``
const Image = styled.div``
const Wrapper = styled.div`
  
  height: 90%;
`
const Container= styled.div`
width: 200px;
height:100vh;
background-color: white;
position: fixed;
left: 0;
top: 0;
transition: all 500ms;
flex-direction: column;
display: flex;
align-items: center;
color: black;
z-index: 3;
justify-content:center;

`
