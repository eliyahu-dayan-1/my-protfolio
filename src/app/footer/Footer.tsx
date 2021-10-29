import React from 'react';
import styled from "styled-components";
import { COLORS_PALATE } from 'ui/style/constants';
import { pxToRem } from 'ui/style/function.js';


const FooterDiv = styled.footer`
  height: ${pxToRem(200)};
  background-color: ${COLORS_PALATE.color5}
`

function Footer() {
  return (
    <FooterDiv>
      im footer
    </FooterDiv>
  )
}

export default React.memo(Footer);
