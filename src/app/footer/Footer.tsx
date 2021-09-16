import React from 'react';
import styled from "styled-components";
import { pxToRem } from 'ui/style/function.js';


const FooterDiv = styled.footer`
  color: blue;
  height: ${pxToRem(200)};
`

function Footer() {
  return (
    <FooterDiv>

    </FooterDiv>
  )
}

export default React.memo(Footer);
