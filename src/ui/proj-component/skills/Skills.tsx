import React from 'react'
import styled from 'styled-components'

const SkillsDiv = styled.div`
    height: 400px
`;

interface Props {
};

const Skills = (props: Props) => {

    return (
        <SkillsDiv
            id="skills"
        >
            Skills
        </SkillsDiv>
    )
}

export default React.memo(Skills);