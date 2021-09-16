import React from 'react'
import styled from 'styled-components'
import { Links } from 'ui/general-components/link/links';
import { portfolioLinksData } from './data'

const Template = styled.div`

`;

const ProtfolioLinks = () => {

    return (
        <div>
            <Links links={portfolioLinksData} />
        </div>
    )
}

export default React.memo(ProtfolioLinks);