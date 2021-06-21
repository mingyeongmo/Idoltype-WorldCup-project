import itzy from "./idol/itzy.json";
import Header from "./components/Header";
import Contents from "./components/Contents";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  
`;
function App() {
  return (
    <>
    <GlobalStyle />
      <Contents />
    </>
    
  );
}

export default App;
