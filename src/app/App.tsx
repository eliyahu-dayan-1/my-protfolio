import React from 'react';
import styled from "styled-components";
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import GlobalStyles from 'ui/style/globalStyles'

const AppWrapper = styled.body`
    $LAYOUT_WIDTH: 100px;

    border: 0;
    font-size: 15px;
    font: inherit;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    & > *{
      padding: 0 $LAYOUT_WIDTH;
    }
`

const ScrollSection = styled.div`
  overflow: scroll;
  height: 100%;
`


function App() {
  return (
    <AppWrapper>
      <Header />
      <ScrollSection>
        <Main />
        <Footer />
      </ScrollSection>
      <GlobalStyles />
    </AppWrapper>
  );
}

export default App;
