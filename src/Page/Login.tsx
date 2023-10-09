import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            Name
            <Input placeholder="Please Enter Your Name Here" />
          </Hold>
          <Hold>
            Email
            <Input type="text" placeholder="Please Enter Your Email Here" />
          </Hold>

          <NavLink to ="/userDashBoard" style={{textDecoration: "none"}}>
          <Button>
            Continue
          </Button>
          </NavLink>
          <Text>
            Don't Have an Account ..?{" "}
            <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
              <span>Signin Then.!!</span>
            </NavLink>
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
const Button = styled.div`
    background-color: white;
    color: cyan;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    margin-top: 15px;

    &:hover{
        color: white;
        background-color: cyan;
        cursor: pointer;
    }
`

const Text = styled.div`
  margin-top: 20px;
  span {
    color: red;
  }
`;

const Input = styled.input`
  height: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
  padding: 10px 10px 10px 10px;
`;

const Hold = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 10px;

  select {
    background-color: white;
    height: 50px;
    color: black;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 40px;
  background-color: cyan;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
`;