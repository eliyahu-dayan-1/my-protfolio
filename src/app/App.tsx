import React from 'react';
import styled from "styled-components";
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

const AppWrapper = styled.div`
    display: flex;
    flex-direction:column;
    min-height: 100vh;

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
