import React, {memo} from 'react';
import {PostContainer, Title, Description, DateContainer, Button} from "./post.styled";
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
        <Button>read more</Button>
      </PostContainer>
  );
})

export default Post;


