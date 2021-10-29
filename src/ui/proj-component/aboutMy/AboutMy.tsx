import React from 'react'
import styled from 'styled-components'
import { ImgWithLoader } from 'ui/general-components/img';

const AboutMyDiv = styled.div`
    min-height: 400px
`;

const IntroduceMyself = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;    
`;

const ResponsiveWebApp = styled.div`
    display: flex;
`

const Devices = styled.div`
`

const Explanation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

interface Props {
};

const AboutMy = (props: Props) => {

    return (
        <AboutMyDiv
            id="about_my"
        >
            <IntroduceMyself>
                "My name is Eliyahu and I'm web-developer."
            </IntroduceMyself>

            <ResponsiveWebApp>
                <Devices>
                    <ImgWithLoader
                        src={'./images/computer-blank-screen.png'}
                        alt={'computer-img'}
                        height={'auto'}
                        width={'500px'}
                    />
                    <ImgWithLoader
                        src={'./images/iphone-blank-screen.png'}
                        alt={'iphone-img'}
                        height={'auto'}
                        width={'500px'}
                    />
                    <ImgWithLoader
                        src={'./images/tablet-blank-screen.jpg'}
                        alt={'tablet-img'}
                        height={'auto'}
                        width={'500px'}
                    />
                </Devices>

                <Explanation>
                    Fully responsive,
                    custom designed
                    Wordpress CMS websites
                </Explanation>
            </ResponsiveWebApp>
        </AboutMyDiv>
    )
}

export default React.memo(AboutMy);