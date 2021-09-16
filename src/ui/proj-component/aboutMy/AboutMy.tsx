import React from 'react'
import styled from 'styled-components'

const AboutMyDiv = styled.div`
    height: 400px
`;

interface Props {
};

const AboutMy = (props: Props) => {

    return (
        <AboutMyDiv>
            about
        </AboutMyDiv>
        
    )
}

export default React.memo( AboutMy );