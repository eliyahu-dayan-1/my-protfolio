import React from 'react';
import styled from "styled-components";
import { AboutMy } from 'ui/proj-component/aboutMy';
import { Contact } from 'ui/proj-component/contact';
import { Portfolio } from 'ui/proj-component/portfolio';
import { Resume } from 'ui/proj-component/resume';
import { Skills } from 'ui/proj-component/skills';
import { COLORS_PALATE } from 'ui/style/constants';

const MainDiv = styled.main`
  flex: 1;
  background-color: ${COLORS_PALATE.color1}
  margin: 0 100px;
`


function Main() {
  return (
    <MainDiv>
      <AboutMy />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </MainDiv>
  );
}

export default React.memo(Main);
