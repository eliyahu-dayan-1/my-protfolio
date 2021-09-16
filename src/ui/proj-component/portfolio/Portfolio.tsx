import React from 'react'
import styled from 'styled-components'

const PortfolioDiv = styled.div`
    height: 400px
`;


interface Props {
};

const Portfolio = (props: Props) => {

    return (
        <PortfolioDiv
            id="portfolio"
        >
            portfolio here
        </PortfolioDiv>
    )
}

export default React.memo( Portfolio );