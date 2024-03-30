//Style
import styled from "styled-components";
import { ChakraProvider, Heading, Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const AboutMe = () => {
  return (
    <ChakraProvider>
      <TopRow direction="row">
        <Title>/ about me</Title>
        <DividerLine
          width="30vw"
          align="center"
          margin="auto 0 auto 0"
          colorScheme="black"
        />
      </TopRow>
      <GridContainer>
        <BottomRowLeft>
          <Paragraph>
            I graduated Occidental College with a focus on Kinesiology and a
            minor in Computer Science. Over the last 1.5 years, I started
            self-learning the Python programming language, and later migrated
            onto learning JavaScript, as I have a profound interest in Web
            Development.
          </Paragraph>
          <Paragraph>
            I am into software development that calls for creativity and
            passion. Other areas I am interested include frontend
            development/design, human-computer interactions, and automation. I
            eventually want to incorporate my knowledge of Kinesiology into my
            programming endeavors. I also love to indulge in visual arts and
            music. In my free time, I go on outings with friends, read books,
            and take photos.
          </Paragraph>
          <Paragraph>
            Here are some technologies I have been working with:
          </Paragraph>
          <TechGrid>
            <div>
              <RightIcon />
              JavaScript ES6+
            </div>
            <div>
              <RightIcon />
              Ruby/Sinatra
            </div>
            <div>
              <RightIcon />
              Node.js
            </div>
            <div>
              <RightIcon />
              Server-hosting
            </div>
            <div>
              <RightIcon />
              Java
            </div>
            <div>
              <RightIcon />
              Python/PyTorch
            </div>
          </TechGrid>
        </BottomRowLeft>
        <BottomRowRight>
          <Avi
            src="https://github.com/sadonyx/personal-site/blob/master/public/about_me_avi.jpg?raw=true"
            alt="Adnan Shihabi"
          />
        </BottomRowRight>
      </GridContainer>
    </ChakraProvider>
  );
};

export default AboutMe;

const GridContainer = styled.div`
  display: grid;

  grid-template-rows: auto;
  grid-template-columns: 350px 150px;
  column-gap: 1vw;
  row-gap: 1vh;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 400px auto;
  }

  height: auto;
  @media only screen and (max-width: 600px) {
  }
`;

const Title = styled(Heading)`
  margin-right: 1em;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 60vw;

  @media only screen and (max-width: 600px) {
    align-items: center;
  }
`;

const BottomRowLeft = styled.div``;

const BottomRowRight = styled.div`
  margin: auto 0 auto 0;
`;

const Paragraph = styled.p`
  width: 350px;
  font-size: 14px;
  line-height: 1.6em;
  margin-bottom: 1em;
  @media only screen and (max-width: 600px) {
    width: 85vw;
  }
`;

const Avi = styled.img`
  border-radius: 10px;
  width: 250px;
  height: auto;
  @media only screen and (max-width: 700px) {
    width: 150px;
    height: auto;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const DividerLine = styled(Divider)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto;

  width: 300px;

  font-size: 13px;
  opacity: 0.8;
`;

const RightIcon = styled(ChevronRightIcon)`
  margin: 0 0.5em auto 0;
`;
