import styled from "styled-components";

export const PostContainer = styled('div')`
  min-width: 200px;
  margin: auto;
  padding: 10px 10px 30px 10px;
`
export const Title = styled('h2')`
  margin-bottom: 5px;
`
export const DateContainer = styled('time')`
  font-size: 12px;
`
export const Description = styled('p')`
  width: 300px;
  text-align: left;
  margin: 60px auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (min-width: 500px) {
    width: 350px;
  }
`

export const Button = styled('button')`
  width: 150px;
  height: 60px;
  border-radius: 0;
  background: lightpink;
  border: none;
  text-decoration: none;
  font-size: 20px;
  margin-top: 0px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`