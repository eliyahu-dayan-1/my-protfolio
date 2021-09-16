import React from 'react';
import styled from "styled-components";
import { pxToRem } from 'ui/style/function';

const HeaderDiv = styled.header`
  color: blue;
  height: ${pxToRem(120)};
`

function Header() {
  return (
    <HeaderDiv>

    </HeaderDiv>
  );
}

export default React.memo(Header);
