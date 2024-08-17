import { theme } from "../styles/theme";
import styled from "styled-components";
import Comment from "./comentComp";
import LikeComp from "./LikeComp";

const Post = (Props) => {
  return (
    <StyledDiv>
      <Profile />
      <MainDiv>
        <Id>{Props.name}</Id> <PostDate>{Props.now}</PostDate>{" "}
        <LikeComp>{Props.count}</LikeComp>
        <MainPost>{Props.content}</MainPost>
        <a
          href={`/ViewPost/${Props.postId}`}
          style={{ textDecoration: "none" }}
        >
          <More>더보기...</More>
        </a>
        <Comment placeholder="댓글 달기" />
        <SeeComment>댓글 {Props.postId}개 보기...</SeeComment>
      </MainDiv>
    </StyledDiv>
  );
};

const SeeComment = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color.gray[300]};
  margin-top: 12px;
  float: right;
`;
const More = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color.gray[300]};
  margin: 24px 0 20px 0;
`;
const StyledDiv = styled.div`
  width: 1044px;
  height: 320px;
  margin-bottom: 20px;
`;
const Profile = styled.div`
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 500px;
  background-color: ${theme.color.gray[200]};
  margin-right: 24px;
  float: left;
`;
const MainDiv = styled.div`
  width: 940px;
  height: 320px;
  float: right;
  border-bottom: 4px solid ${theme.color.gray[300]};
`;
const Id = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-right: 26px;
  display: inline;
`;
const PostDate = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: inline;
  margin-top: 9px;
  color: ${theme.color.main[500]};
`;
const MainPost = styled.div`
  width: 940px;
  height: 84px;
  margin-top: 18px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
`;

export default Post;
