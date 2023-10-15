import React, {memo} from 'react';
import {PostContainer, Title, Description, DateContainer} from "./post.styled";
type Props = IPost
export const Post = memo(({id, title, description, createdAt}: Props) => {
  console.log("id: ", id);
  return (
      <PostContainer>
        <Title>{title}</Title>
        <DateContainer dateTime={createdAt.toLocaleDateString()}>
          published on {createdAt.toLocaleDateString()}
        </DateContainer>
        <Description>{description}</Description>
      </PostContainer>
  );
})

export default Post;


