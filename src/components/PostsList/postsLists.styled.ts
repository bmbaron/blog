import styled from "styled-components";

export const List = styled('ul')`
  width: auto;
  margin: 10px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const ListItem = styled('li')`
  text-align: center;
  border: 1px solid lightblue;
  padding: 20px;
  list-style: none;
  border-radius: 5px;
  min-height: 300px;
  margin: auto;
  @media only screen and (min-width: 600px) {
    min-width: 400px;
  }
`