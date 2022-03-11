import React from "react";
import Contents from "./components/Contents/Contents";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  
`;
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Contents />
      </Provider>
    </>
  );
};

export default App;
