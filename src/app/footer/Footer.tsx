import React from 'react';
import styled from "styled-components";
import { COLOR_PALATES } from 'ui/style/constants';
import { pxToRem } from 'ui/style/function.js';


const FooterDiv = styled.footer`
  color: blue;
  height: ${pxToRem(200)};
  background-color: ${COLOR_PALATES.color5}
`

function Footer() {
  return (
    <FooterDiv>
      im footer
    </FooterDiv>
  )
}

export default React.memo(Footer);
