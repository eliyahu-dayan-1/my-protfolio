import React from 'react';
import styled from "styled-components";
import { PortfolioLinks } from 'ui/proj-component/portfolioLinks';
import { COLOR_PALATES } from 'ui/style/constants';
import { pxToRem } from 'ui/style/function';
import { ImgWithLoader } from 'ui/general-components/img';

const HeaderDiv = styled.header`
  height: ${pxToRem(120)};
  background-color: ${COLOR_PALATES.color2};
  padding: 0 100px;
  display: flex;
  align-items: center;
`

function Header() {
  return (
    <HeaderDiv>
      <ImgWithLoader
        src={"./logo-web-developer.png"}
        alt={"header_img"}
        width={"20px"}
        height={'auto'}
      />
      <PortfolioLinks />
    </HeaderDiv>
  );
}

export default React.memo(Header);
