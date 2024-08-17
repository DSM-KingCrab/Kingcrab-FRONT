import styled from "styled-components";
import heartFilled from "../images/ph_heart-fill.png";
import heartBlank from "../images/octicon_heart-16.png";
import React from "react";
import { theme } from "../styles/theme";

class LikeComp extends React.Component {
  state = {
    isChecked: false,
    notice: " ",
  };

  onClick = () => {
    this.state.isChecked
      ? this.setState({
          isChecked: false,
          notice: " ",
        })
      : this.setState({
          isChecked: true,
          notice: "1",
        });
  };

  render() {
    return (
      <React.Fragment>
        <LikeDiv>
          {this.state.isChecked ? (
            <Num style={{ color: "#ff2f54" }}>{this.state.notice}</Num>
          ) : (
            <Num style={{ color: "#8c8a8f" }}>{this.state.notice}</Num>
          )}

          {this.state.isChecked ? (
            <StyledImg1 src={heartFilled} onClick={this.onClick} />
          ) : (
            <StyledImg2
              src={heartBlank}
              style={{ fontSize: "36px" }}
              onClick={this.onClick}
            />
          )}
        </LikeDiv>
      </React.Fragment>
    );
  }
}

const Num = styled.p`
  font-size: 24px;
  margin-right: 8px;
  font-weight: bold;
  display: inline;
  color: ${theme.color.gray[500]};
`;
const LikeDiv = styled.div`
  float: right;
  margin-right: 12px;
  display: flex;
  align-items: flex-end;
  display: inline;
`;
const StyledImg1 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledImg2 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  cursor: pointer;
`;

export default LikeComp;
