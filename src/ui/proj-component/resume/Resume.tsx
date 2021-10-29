import React from 'react'
import styled from 'styled-components'

const ResumeDiv = styled.div`
    min-height: 400px
`;

interface Props {
};

const Resume = (props: Props) => {

    return (
        <ResumeDiv
            id="resume"
        >
            resume
        </ResumeDiv>
    )
}

export default React.memo( Resume );