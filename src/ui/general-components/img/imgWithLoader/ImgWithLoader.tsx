import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
`

interface Props {
    src: string,
    alt: string,
    height: string,
    width: string
}

const ImgWithLoader = ({
    src,
    alt,
    height = 'auto',
    width = 'auto',
    ...props }: Props) => {

    return (
        <Img
            src={src}
            alt={alt}
            {...props}
        />
    )
}

export default React.memo(ImgWithLoader);