import { useEffect, useState } from "react";
import Input from "../components/InputComp";
import styled from "styled-components";
import KingCrabLogo from "../images/Krab.png";
import { theme } from "../styles/theme";
import Password from "../components/PassComp";
import ButtonComp from "../components/ButtonComp";
import axios from "axios";
import Swal from "sweetalert2";

const SignIn = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const [passwd, setRepassword] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const onClick = () => {
    if (IsName() === true && IdCheck() === true && passwdCheck() === true) {
      axios.post(`${BASE_URL}signup`, data);
    } else {
      alert("모든 정보를 정확하게 입력해주세요.");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleRepassword = (e) => {
    const { value } = e.target;
    setRepassword(value);
  };

  const IsName = () => {
    if (data.password === passwd) {
      return true;
    } else {
      return false;
    }
  };

  const checkDup = async (userName) => {
    const checkIdDup = await axios.get(`${BASE_URL}duplicate/${userName}`);
    if (checkIdDup === true) {
      Swal.fire({
        icon: "success",
        title: "중복되는 아이디 없음",
        text: "사용 가능한 아이디입니다🥳.",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "중복되는 아이디 있음",
        text: "이미 존재하는 아이디입니다😥.",
      });
    }
  };

  const IdCheck = () => {
    const checkId = /^[a-z0-9_-]{5,20}$/;

    if (checkId.test(data.userName)) {
      return true;
    } else {
      return false;
    }
  };

  const passwdCheck = () => {
    const checkPasswd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;

    if (checkPasswd.test(data.password)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    IsName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwd, data.password]);

  return (
    <BigDiv>
      <StyledDiv>
        <StyledSection>
          <StyledImage src={KingCrabLogo} alt="대게 로고" />
          <StyledH1>대게</StyledH1>
          <StyledDiv>
            <StyledH11>
              <StyledH1>대</StyledH1>
              <p>마고</p> <StyledH1>게</StyledH1>시판에 회원가입 하세요
            </StyledH11>
          </StyledDiv>
          <InputDiv>
            <Input
              width="452px"
              label="아이디"
              type="text"
              value={data.userName}
              name="userName"
              placeholder="아이디를 입력하세요"
              onChange={handleChange}
            />

            <Dup onClick={() => checkDup(data.userName)}>중복 확인</Dup>
          </InputDiv>
          {IdCheck() ? (
            <StyledP2>올바른 아이디 형식입니다.</StyledP2>
          ) : (
            <StyledP3>5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</StyledP3>
          )}
          <Password
            label="비밀번호"
            type="text"
            placeholder="비밀번호를 입력하세요"
            value={data.password}
            name="password"
            onChange={handleChange}
          />
          {passwdCheck() ? (
            <StyledP2>올바른 비밀번호 형식입니다.</StyledP2>
          ) : (
            <StyledP3>8~16자의 영문 대 소문자, 숫자, 특수문자를 포함하게 작성하세요.</StyledP3>
          )}
          <Password
            label="비밀번호 확인"
            type="text"
            placeholder="비밀번호를 한 번 더 입력하세요"
            value={passwd}
            name="passwd"
            onChange={handleRepassword}
          />
          {IsName() ? <StyledP2>비밀번호가 일치합니다</StyledP2> : <StyledP3>비밀번호가 일치하지 않습니다</StyledP3>}
          <StyledButton>
            <ButtonComp onClick={onClick} size={"Large"}>
              회원가입
            </ButtonComp>
          </StyledButton>
        </StyledSection>
      </StyledDiv>
    </BigDiv>
  );
};

const InputDiv = styled.div`
  display: flex;
  align-items: end;
`;
const Dup = styled.button`
  width: 140px;
  height: 48px;
  margin-left: 8px;
  background-color: ${theme.color.main[500]};
  font-size: 18px;
  font-weight: bold;
  color: white;
  display: inline;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
const BigDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.div`
  margin-top: 32px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 846px;
  margin: 88px auto;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  display: flex;
  align-self: center;
`;
const StyledH1 = styled.span`
  font-size: 42px;
  color: ${theme.color.main[500]};
  display: flex;
  align-self: center;
`;
const StyledH11 = styled.span`
  font-size: 42px;
  color: ${theme.color.black};
  display: flex;
  align-self: center;
`;
const StyledP2 = styled.p`
  font-size: 16px;
  margin-top: 4px;
  margin-left: 4px;
`;
const StyledP3 = styled.p`
  font-size: 16px;
  margin-top: 4px;
  margin-left: 4px;
  color: ${theme.color.main[800]};
`;
export default SignIn;
