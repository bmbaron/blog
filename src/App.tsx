import React from 'react';
import {posts} from './data/mock-data';
import {PostsList} from "./components";
import {useState} from 'react';
import {MainContainer, Title} from "./app.styled";

function App() {
  const [data, setData] = useState(posts);
  const removeSecondPost = () => {
    const [firstPost, ...rest] = data;
    setData(rest);
  }
  return (
    <MainContainer>
      {/*<button onClick={removeSecondPost}>remove 2nd post</button>*/}
      <Title>Articles</Title>
      <PostsList data={posts} />
    </MainContainer>
  );
}

export default App;
