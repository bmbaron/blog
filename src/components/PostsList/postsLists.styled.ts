import styled from "styled-components";

export const List = styled('ul')`
  width: auto;
  margin: 20px auto;
  padding: 0px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media only screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 850px;
  }
  @media only screen and (min-width: 1310px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 1800px) {
    max-width: 1750px;
  }
`

export const ListItem = styled('li')`
  text-align: center;
  list-style: none;
  border-radius: 5px;
  min-height: 300px;
  margin: auto;
  background: rgba(100, 62.75, 47.84, 0.1);
  @media only screen and (min-width: 500px) {
    width: 400px;
  }
`