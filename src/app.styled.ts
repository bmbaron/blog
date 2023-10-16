import styled from "styled-components";

export const MainContainer = styled('div')`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 30px;
  max-width: 1920px;
  margin: auto;
`

export const Title = styled('h1')`
  margin: 80px auto;
  font-size: 45px;
  @media only screen and (min-width: 500px) {
    font-size: 70px;
  }
`