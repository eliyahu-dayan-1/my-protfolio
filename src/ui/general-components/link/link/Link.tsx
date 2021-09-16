import React from 'react'
import styled from 'styled-components'

const LinkDiv = styled.a`

`;
const Title = styled.div`

`;


interface Props {
    title: string,
    href: string
};

const Link = ({ title, href }: Props) => {

    return (
        <LinkDiv href={href}>
            <Title>{title}</Title>
        </LinkDiv>
    )
}

export default React.memo(Link);