import { theme } from "../styles/theme";
import styled from "styled-components";
import openEye from "../images/mdi_eye.png";
import closeEye from "../images/mdi_eye-off.png";
import { useState } from "react";

const Password = (props) => {
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
          {pwType.visible ? (
            <img src={openEye} alt="비밀번호 보이기" />
          ) : (
            <img src={closeEye} alt="비밀번호 숨기기" />
          )}
        </StyledSpan>
      </InputBox>
    </>
  );
};

const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  margin-bottom: 12px;
  margin-top: 32px;
`;
const InputBox = styled.div`
  width: 100%;
  height: 48px;
  border: 2px solid ${theme.color.gray[100]};
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;
const StyledInput = styled.input`
  &::placeholder {
    color: ${theme.color.gray[500]};
    font-size: 18px;
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

export default Password;
