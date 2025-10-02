import image from "../assets/images/about.png"
import banner from "../assets/images/bg1.png"

import {
    Container,
    Content,
    Image,
    Text,
    Desc,
    Button,
    Banner,
    Heading
}
    from "../assets/css/About.styled"

const About: React.FC = () => {
    return (<>
        <Container>
            <Content>
                <Image src={image} alt="" />
                <Text>
                    <h1>About us</h1>
                    <Desc>It is a long established fact that a reader
                        will be distracted by the readable content of
                        a page when looking at its layout. Lorem Lorem The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default model text, and a search for
                        'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years,
                    </Desc>
                    <Button>Read more</Button>
                </Text>
            </Content>
        </Container>
        <Heading>Choose us</Heading>
        <Banner src={banner} alt="" />
    </>

    )
}

export default About


