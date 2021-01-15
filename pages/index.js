import Header from '../components/Header'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <GlobalStyle />
        <h1>
          Welcome</h1>
          <div className="container ct-0 st-0">
            <p>red</p>
          </div>
          <div className="container ct-1 st-1">
            <p>gold</p>
          </div>
          <div className="container ct-2 st-2">
            <p>green</p>
          </div>
          <div className="container ct-3 st-3">
            <p>blue</p>
          </div>
    </div>
  )
}
