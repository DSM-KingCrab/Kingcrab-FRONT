import { styled } from "styled-components";
import { theme } from "../styles/theme";

const ButtonComp = ({ size, children, onClick }) => {
  return (
    <>
      {" "}
      {size === "Small" && (
        <SmallButton onClick={onClick}>{children}</SmallButton>
      )}
      {size === "Medium" && (
        <MediumButton onClick={onClick}>{children}</MediumButton>
      )}
      {size === "Large" && (
        <LargeButton onClick={onClick}>{children}</LargeButton>
      )}
    </>
  );
};
export default ButtonComp;

const SmallButton = styled.div`
  background-color: ${theme.color.main[500]};
  width: 111px;
  height: 52px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: wanted;
  cursor: pointer;
`;

const MediumButton = styled.div`
  background-color: ${theme.color.main[500]};
  width: 140px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: wanted;
  cursor: pointer;
`;

const LargeButton = styled.div`
  background-color: ${theme.color.main[500]};
  width: 600px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: wanted;
  cursor: pointer;
`;
