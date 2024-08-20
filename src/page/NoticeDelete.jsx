import styled from "styled-components";
import CancelComp from "../components/CancelComp";
import ConfirmComp from "../components/ConfirmComp";
import instance from "../api";
import { useNavigate } from "react-router-dom";

const NoticeDelete = (props) => {
  const router = useNavigate();
  const DeleteApi = () => {
    const userName = localStorage.getItem(`userName`);
    if (userName === props.name) {
      instance.delete(`/post/delete/${props.postId}`).then(router("/mainLog"));
    } else {
      alert("타인의 게시물은 삭제할 수 없습니다.");
    }
  };
  return (
    <>
      <Main>
        <Title>{props.title}</Title>
        <SmallDiv>
          <Desc>{props.describe}</Desc>
          <Desc2>{props.des}</Desc2>
        </SmallDiv>
        <Button>
          <a href="/ViewPost" style={{ textDecoration: "none" }}>
            <CancelComp />
          </a>
          <ConfirmComp onClick={DeleteApi} text="삭제" />
        </Button>
      </Main>
    </>
  );
};

const Button = styled.div`
  width: 304px;
  height: 56px;
  justify-content: space-between;
  margin-top: 40px;
`;
const SmallDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 29px;
`;
const Title = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: black;
  line-height: 50px;
  margin-bottom: 28px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const Desc2 = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const Main = styled.div`
  position: fixed;
  width: 560px;
  height: 336px;
  border-radius: 20px;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 42px 0 62px 0;
`;

export default NoticeDelete;
