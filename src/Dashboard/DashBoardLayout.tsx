import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import DashBordSideBar from './DashBordSideBar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div>
      <Container>
        <DashBoardHeader/>
        <DashBordSideBar/>

        <Wrapper>
            <Outlet/>
        </Wrapper>
      </Container>
    </div>
  )
}

export default DashBoardLayout;
const Container = styled.div`
    width:100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-end;
`

const Wrapper = styled.div`
    width: calc(100% - 250px);
    transition: all 360ms;
    display: flex;
    background-color: #f1f1f1;
    transition: all 500ms;
    margin-top: 90px;
    overflow-x: hidden;
`
