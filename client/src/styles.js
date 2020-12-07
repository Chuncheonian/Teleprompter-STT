import styled, { createGlobalStyle } from "styled-components";
import Teleprompter from "./components/Teleprompter";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: sans-serif;
    margin: 0;
    overflow: hidden;
    background: #282828;
  }
`;

export const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  height: 100vh;
  margin: 1rem;
`;

export const StyledTeleprompter = styled(Teleprompter)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

`;