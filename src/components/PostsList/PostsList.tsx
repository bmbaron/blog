import React, {memo} from 'react';
import {List, ListItem} from "./postsLists.styled";
import {Post} from "../Post";
interface Props {
  data: IPost[];
}
export const PostsList = memo(({data}: Props) => {
  return (
      <List>
        {data.map((item) => (
            <ListItem key={item.id}>
              <Post {...item} />
            </ListItem>
        ))}
      </List>
  );
})

export default PostsList;


