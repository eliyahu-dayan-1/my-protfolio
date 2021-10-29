import React from 'react';
import styled from "styled-components";
import { PortfolioLinks } from 'ui/proj-component/portfolioLinks';
import { COLORS_PALATE } from 'ui/style/constants';
import { pxToRem } from 'ui/style/function';
import { ImgWithLoader } from 'ui/general-components/img';

const HeaderDiv = styled.header`
  height: ${pxToRem(120)};
  background-color: ${COLORS_PALATE.color2};
  display: flex;
  justify-content: space-between;
  align-items: center;
`



function Header() {
  return (
    <HeaderDiv>
      <ImgWithLoader
        src={"./logo-web-developer.png"}
        alt={"header_img"}
        width={"100px"}
        height={'auto'}
      />
      <PortfolioLinks />
    </HeaderDiv>
  );
}

export default React.memo(Header);
