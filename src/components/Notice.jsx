import styled from "styled-components";

const Notice = (props) => {
  return(
    <>
      <Main>
        <Title>
          {props.title}
        </Title>
        <des>
          {props.describe}
        </des>
      </Main>
    </>
  )
}

const Title = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: black;
  line-height: 50px;
  margin-top: 42px;
`
const Main = styled.div`
  position: fixed;
  width: 560px;
  height: 336px;
  border-radius: 20px;
  z-index: 100; 
  background-color: white;
  display: flex; 
  justify-content: center;
`;

export default Notice;