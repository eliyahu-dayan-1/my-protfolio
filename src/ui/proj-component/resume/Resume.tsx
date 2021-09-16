import React from 'react'
import styled from 'styled-components'

const ResumeDiv = styled.div`
    height: 400px
`;

interface Props {
};

const Resume = (props: Props) => {

    return (
        <ResumeDiv>
            resume
        </ResumeDiv>
    )
}

export default React.memo( Resume );