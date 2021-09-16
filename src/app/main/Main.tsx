import React from 'react';
import styled from "styled-components";

const MainDiv = styled.main`
  color: blue;
  flex: 1;
`


function Main() {
    return (
        <MainDiv>
        </MainDiv>
    );
}

export default React.memo(Main);
