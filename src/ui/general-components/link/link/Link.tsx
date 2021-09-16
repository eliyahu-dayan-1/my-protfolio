import React from 'react'
import styled from 'styled-components'

const LinkDiv = styled.a`
    padding: 20px 10px;
    text-decoration:none;

    &:visited{
        text-decoration:none;
    }
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