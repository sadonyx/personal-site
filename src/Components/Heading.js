//util
import TypeAnimation from "react-type-animation";
//Style
import styled from "styled-components";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Heading = () => {
  return (
    <ChakraProvider>
      <Container>
        <TypeAnim cursor={true} sequence={["hello, adnan here"]} wrapper="h1" />
        <BioBody>
          I am a software engineer based in Los
          Angeles with a profound interest in full-stack software development and
          design, human-computer interactions and pretty much everything in the
          realm of IT! Please feel free to explore more about me and my work!
        </BioBody>
        <EmailMe
          bg="transparent"
          variant="outline"
          leftIcon={<EmailIcon />}
          colorScheme="teal"
          onClick={() => {
            window.open("mailto:adnan@ashihabi.me");
          }}
        >
          Contact Me
        </EmailMe>
        <PlaceholderBot />
      </Container>
    </ChakraProvider>
  );
};

export default Heading;

const PlaceholderBot = styled.div`
  height: 5vh;
  width: auto;
`;

const TypeAnim = styled(TypeAnimation)`
font-size:3.25em;
@media only screen and (max-width: 600px) {
    font-size:2em;
`;

const Container = styled(Box)`
  padding: 2em 0;
  @media only screen and (max-width: 600px) {
    text-align: center;
    align-items: center;
  }
`;

const BioBody = styled(Box)`
  width: 500px;
  font-size: 1.1em;
  line-height: 2em;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const EmailMe = styled(Button)`
  background-color: transparent;
  margin: 1em 0 0 1em;
`;
