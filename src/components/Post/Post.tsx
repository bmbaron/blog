import React, {memo} from 'react';
import {PostContainer, Title, Description, DateContainer} from "./post.styled";
type Props = IPost
export const Post = memo(({id, title, description, createdAt}: Props) => {
  console.log("id: ", id);
  return (
      <PostContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DateContainer dateTime={createdAt.toLocaleDateString()}>
          {createdAt.toLocaleDateString()}
        </DateContainer>
      </PostContainer>
  );
})

export default Post;


