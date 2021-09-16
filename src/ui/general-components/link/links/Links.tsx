import React from 'react'
import styled from 'styled-components'
import Link from '../link/Link';

const LinksDiv = styled.div`
    display: flex;
`;

interface Props {
    links: Array<any>
};

const Links = ({ links }: Props) => {

    return (
        <LinksDiv>
            {
                links.map(link => (
                    <Link
                        title={link.title}
                        href={link.href}
                    />)
                )
            }
        </LinksDiv>
    )
}

export default React.memo(Links);