import styled from "styled-components";
import React from "react";
import heartFilled from "../images/ph_heart-fill.png";
import heartBlank from "../images/octicon_heart-16.png";

class LikeComp extends React.Component {
  state = {
    isChecked: false,
  };

  onClick = () => {
    this.state.isChecked
      ? this.setState({
          isChecked: false,
        })
      : this.setState({
          isChecked: true,
        });
  };

  render() {
    return (
      <React.Fragment>
        <LikeDiv>
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

const LikeDiv = styled.div`
  float: right;
  margin-right: 12px;
  display: flex;
  align-items: flex-end;
`;
const StyledImg1 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover{
    transform: scale(1.1);
  }
`;
const StyledImg2 = styled.img`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
`;

export default LikeComp;
