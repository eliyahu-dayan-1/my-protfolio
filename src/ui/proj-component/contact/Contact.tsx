import React from 'react'
import styled from 'styled-components'

const ContactDiv = styled.div`
    height: 400px
`;


interface Props {
};

const Contact = (props: Props) => {

    return (
        <ContactDiv>
            contact
        </ContactDiv>
    )
}

export default React.memo( Contact );