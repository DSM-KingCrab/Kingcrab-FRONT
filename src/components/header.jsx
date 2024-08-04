import styled from "styled-components";
import { theme } from "../styles/theme";
import KingKrabLogo from "../images/fluent-emoji-high-contrast_crab.png";

const Header1 = () => {
  return (
    <>
      <Header>
        <Logo>
          <img src={KingKrabLogo} alt="대게 로고" width={56} height={56} />
          <p>대게</p>
        </Logo>
        <p>dodowind_</p>
      </Header>
    </>
  );
};

export default Header1;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 40px;
  font-size: 32px;
  background-color: ${theme.color.main[100]};
  color: ${theme.color.white};
`;

const Logo = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
`;
