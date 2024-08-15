import { styled } from "styled-components";
import { theme } from "../styles/theme";

const ButtonComp = ({ size, children, onClick }) => {
  return (
    <>
      {" "}
      {size === "Small" && <SmallButton onClick={onClick}>{children}</SmallButton>}
      {size === "Medium" && <MediumButton onClick={onClick}>{children}</MediumButton>}
      {size === "Large" && <LargeButton onClick={onClick}>{children}</LargeButton>}
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
<<<<<<< HEAD
  font-family: "Wanted Sans KR";
=======
  font-family: wanted;
  cursor: pointer;
>>>>>>> 8133a5fe5b39f9408db8338ceffcad3518bb7827
`;

const MediumButton = styled.div`
  background-color: ${theme.color.main[500]};
  width: 140px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
<<<<<<< HEAD
  font-family: "Wanted Sans KR";
=======
  font-family: wanted;
  cursor: pointer;
>>>>>>> 8133a5fe5b39f9408db8338ceffcad3518bb7827
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
<<<<<<< HEAD
  font-family: "Wanted Sans KR";
=======
  font-family: wanted;
  cursor: pointer;
>>>>>>> 8133a5fe5b39f9408db8338ceffcad3518bb7827
`;
