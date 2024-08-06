import { theme } from "../styles/theme";
import styled from "styled-components";
import KingCrabLogoWhite from "../images/KingCrab.png";

const HeaderNoLog = () => {
  return (
    <>
      <StyledDiv>
        <Logo>
          <StyledImg src={KingCrabLogoWhite} />
          <StyledP>대게</StyledP>
        </Logo>
        <a href="/Login" style={{ textDecoration: "none" }}>
          <StyledP2>로그인</StyledP2>
        </a>
      </StyledDiv>
    </>
  );
};

const Logo = styled.div`
  width: 136px;
  height: 56px;
  display: flex;
  align-items: center;
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${theme.color.main[100]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;
const StyledImg = styled.img`
  width: 56px;
  height: 56px;
  display: inline;
`;
const StyledP = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  display: inline;
  margin: 9px 0 9px 24px;
  line-height: 38px;
`;
const StyledP2 = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;
`;

export default HeaderNoLog;
