import React from 'react'
import styled from 'styled-components'
import { Links } from 'ui/general-components/link/links';
import { portfolioLinksData } from './data'

const Portfolio = styled.div`

`;

const PortfolioLinks = () => {

    return (
        <Portfolio>
            <Links
                links={portfolioLinksData}
                initialActiveIdx={0}
            />
        </Portfolio>
    )
}

export default React.memo(PortfolioLinks);