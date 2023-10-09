import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
      <Container>
            <One>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda porro quisquam unde expedita cupiditate est quaerat quidem laudantium ea.
            </One>
            <Two>
                Two
            </Two>
      </Container>
    </div>
  )
}

export default Hero;
const Two = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: blanchedalmond;
`
const One = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;

`
const Container = styled.div`
    background-color: aliceblue;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
