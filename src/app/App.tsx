import React from 'react';
import styled from "styled-components";
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

const AppWrapper = styled.body`
    //reset default css
    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }

    border: 0;
    font-size: 100%;
    font: inherit;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
