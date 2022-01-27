import { useState } from "react";
import styled from "styled-components";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoExitOutline,
  IoFolderOpenOutline,
  IoFolderOutline,
} from "react-icons/io5";
import { creations } from "../software_creations/creations";

function WorkExperience() {
  const [folderIcon, setFolderIcon] = useState(0);
  return (
    <ChakraProvider>
      <TopRow>
        <Title>/ software creations</Title>
      </TopRow>
      <CreationsGrid>
        {creations.map((creation) => {
          return (
            <CreationsBox
              key={creation.id}
              id={creation.id}
              onMouseEnter={() => setFolderIcon(creation.id)}
              onMouseLeave={() => setFolderIcon(0)}
            >
              <IconsRow>
                {folderIcon && folderIcon == creation.id ? (
                  <FolderIconOpen />
                ) : (
                  <FolderIcon />
                )}
                <SmallIconsContainer>
                  <a
                    role="button"
                    title="External link to GitHub page"
                    href={creation.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GitHubIcon />
                  </a>
                  {creation.link.length ? (
                    <a
                      role="button"
                      title="External link to project demo"
                      href={creation.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ExternalLinkIcon />
                    </a>
                  ) : null}
                </SmallIconsContainer>
              </IconsRow>
              <CreationsTitle size="sm">{creation.title}</CreationsTitle>
              <CreationsDescription>
                {creation.description}
              </CreationsDescription>
              <CreationsTech>{creation.technologies}</CreationsTech>
            </CreationsBox>
          );
        })}
      </CreationsGrid>
    </ChakraProvider>
  );
}

export default WorkExperience;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 60vw;
`;

const Title = styled(Heading)`
  margin-right: 1em;
`;

const CreationsGrid = styled.div`
  display: grid;
  grid-template-columns: 21vw 21vw 21vw;
  column-gap: 5px;
  row-gap: 5px;
  @media only screen and (max-width: 950px) {
    grid-template-rows: 20vh 20vh;
    grid-template-columns: 42.5vw 42.5vw;
    row-gap: 45px;
  }
  @media only screen and (max-width: 575px) {
    grid-template-columns: 85vw;
  }
`;

const CreationsBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  margin: 0.15em;

  /* width: 400px; */
  height: 350px;

  background-color: rgb(29, 27, 51);
  color: rgb(255, 255, 255);

  @media only screen and (max-width: 950px) {
    height: 300px;
  }
  @media only screen and (max-width: 575px) {
    height: 250px;
  }

  :hover {
    top: -10px;
    background-color: rgb(38, 35, 69);
  }
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 20px;
  margin-left: auto;
  margin-right: 30px;
  margin-bottom: 2.5em;
`;

const GitHubIcon = styled(IoLogoGithub)`
  width: 22px;
  height: auto;
  margin: auto 3.5px auto 0;
`;

const ExternalLinkIcon = styled(IoExitOutline)`
  width: 22px;
  height: auto;
  margin: auto 0 auto 3.5px;
`;

const FolderIcon = styled(IoFolderOutline)`
  position: relative;
  top: 0px;
  left: 25px;
  width: 35px;
  height: auto;
`;

const FolderIconOpen = styled(IoFolderOpenOutline)`
  position: relative;
  top: 0px;
  left: 25px;
  width: 35px;
  height: auto;
`;

const CreationsTitle = styled(Heading)`
  position: relative;
  left: 7.5%;
  line-height: 1em;
  margin-bottom: 1em;
`;

const CreationsDescription = styled.p`
  width: 85%;
  margin: 1em auto auto auto;
  font-size: 14px;
`;

const CreationsTech = styled.p`
  position: relative;
  font-size: 11px;
  left: 7.5%;
  margin-bottom: 1.5em;
  opacity: 0.6;
  width: 90%;
`;
