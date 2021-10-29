import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Link from '../link/Link';

const LinksDiv = styled.div`
    display: flex;
`;

interface Props {
    links: Array<any>,
    initialActiveIdx: number
};

const Links = ({
    links,
    initialActiveIdx = 0 }: Props) => {

    const [activeIdx, setActiveIdx] = useState(initialActiveIdx)

    const onLinkClick = useCallback((linkIdx : number) => {
        setActiveIdx(linkIdx)
    }, [])

    return (
        <LinksDiv>
            {
                links.map((link, idx) => (
                    <Link
                        title={link.title}
                        href={link.href}
                        isActive={activeIdx === idx}
                        linkIdx={idx}
                        onLinkClicked={onLinkClick}
                    />)
                )
            }
        </LinksDiv>
    )
}

export default React.memo(Links);