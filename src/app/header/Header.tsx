import React from 'react';
import styled from "styled-components";
import { ProtfolioLinks } from 'ui/proj-component/protfolioLinks';
import { COLOR_PALATES } from 'ui/style/constants';
import { pxToRem } from 'ui/style/function';

const HeaderDiv = styled.header`
  color: blue;
  height: ${pxToRem(120)};
  background-color: ${COLOR_PALATES.color2};
  padding: 0 100px;
`

function Header() {
  return (
    <HeaderDiv>
      <ProtfolioLinks/>
    </HeaderDiv>
  );
}

export default React.memo(Header);
