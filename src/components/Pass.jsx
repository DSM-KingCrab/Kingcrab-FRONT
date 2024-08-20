import { theme } from "../styles/theme";
import styled from "styled-components";
import openEye from "../images/mdi_eye.png";
import closeEye from "../images/mdi_eye-off.png";
import { useState } from "react";

const Pass = (props) => {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = () => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <>
      <StyledP>{props.label}</StyledP>
      <InputBox>
        <StyledInput
          type={pwType.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <StyledSpan onClick={handlePasswordType}>
          {pwType.visible ? <img src={openEye} alt="비밀번호 보이기" /> : <img src={closeEye} alt="비밀번호 숨기기" />}
        </StyledSpan>
      </InputBox>
    </>
  );
};

const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  margin: 32px 0px 22px 370px;
`;
const InputBox = styled.div`
  width: 602px;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding: 0px 10px;
  border: 1px solid ${theme.color.gray[700]};
  margin-left: 370px;
  margin-bottom: 20px;
`;
const StyledInput = styled.input`
  &::placeholder {
    color: ${theme.color.gray[500]};
    font-size: 16px;
  }
  font-size: 18px;
  outline: none;
  border: none;
  margin-top: 13px;
  margin-bottom: 14px;
  float: left;
  line-height: 21px;
  width: 500px;
`;

const StyledSpan = styled.span`
  width: 30px;
  height: 30px;
  float: right;
  margin-top: 8px;
`;

export default Pass;
