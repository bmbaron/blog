import React from 'react';
import logo from './logo.svg';
import './App.css';
import {posts} from './data/mock-data';
import {PostsList} from "./components";
import {useState} from 'react';

function App() {
  const [data, setData] = useState(posts);
  const removeSecondPost = () => {
    const [firstPost, ...rest] = data;
    setData(rest);
  }
  return (
    <div>
      <button onClick={removeSecondPost}>remove 2nd post</button>
      <PostsList data={posts} />
    </div>
  );
}

export default App;
