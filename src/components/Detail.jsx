import { theme } from "../styles/theme";
import styled from "styled-components";

const Detail = () => {
  return (
    <MainDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 1044px;
  height: 480px;
  border-bottom: 2px solid ${theme.color.gray[300]};
  font-size: 16px;
  padding: 24px 72px 0 72px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Detail;
