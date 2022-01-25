//Style
import styled from "styled-components";
import { Flex, ChakraProvider, Heading, Divider } from "@chakra-ui/react";
import ExperiencesInteractiveMenu from "../work_experience/ExperiencesInteractiveMenu";

function WorkExperience() {
  return (
    <ChakraProvider>
      <Container>
        <TopRow direction="row">
          <Title>/ experience</Title>
          <DividerLine width="40%" align="center" colorScheme="black" />
        </TopRow>
        <ExperiencesInteractiveMenu />
      </Container>
    </ChakraProvider>
  );
}

export default WorkExperience;

const Container = styled.div`
  width: 900px;
`;

const TopRow = styled(Flex)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 60vw;
`;

const Title = styled(Heading)`
  margin-right: 1em;
`;

const DividerLine = styled(Divider)`
  margin: auto 0 auto 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
