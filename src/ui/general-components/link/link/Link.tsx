import React from 'react'
import styled from 'styled-components'
import { COLORS_PALATE } from 'ui/style/constants';

const LinkDiv = styled.a`
    text-decoration:none;
    font-size: 15px;
    margin-left: 20px;
    padding-bottom: 20px;
    
    
    &.active{
        border-bottom: ${COLORS_PALATE.color4} solid 2px;
        color: ${COLORS_PALATE.color4};
    }

    &:visited{
        text-decoration:none;
    }
`;
const Title = styled.div`

`;


interface Props {
    title: string,
    href: string,
    isActive: boolean,
    linkIdx: number,
    onLinkClicked(linkIdx: number): void,
};

const Link = ({
    title,
    href,
    isActive,
    linkIdx,
    onLinkClicked }: Props) => {

    return (
        <LinkDiv
            href={href}
            className={(isActive) ? 'active' : ''}
            onClick={() => onLinkClicked(linkIdx)}
        >
            <Title>{title}</Title>
        </LinkDiv>
    )
}

export default React.memo(Link);