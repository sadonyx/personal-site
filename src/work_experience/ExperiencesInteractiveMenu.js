import { useState } from "react";
import styled from "styled-components";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { experiences } from "./experiences";
import { ChevronRightIcon } from "@chakra-ui/icons";

function ExperiencesInteractiveMenu() {
  const [selected, setSelected] = useState(0);
  const data = experiences;
  return (
    <>
    <Flexbox>
      <ItemList>
        {[
          "LaunchSchool",
          "Tekreach Solutions",
          "KOXY Radio",
          "Undergrad Research",
        ].map((text, index) => (
          <ListItem button key={index} onClick={() => { setSelected(index); }}>
            <ListItemText
              primary={text}
            />
          </ListItem>
        ))}
      </ItemList>
      <Divider orientation="vertical" varient="middle" flexItem />
      <DisplayResume>
        <HeadAndDate direction="column">
          <WorkHeading size="md">{data[selected].title}</WorkHeading>
          <WorkDate>{data[selected].dates}</WorkDate>
        </HeadAndDate>
        {data[selected].description.map((exp, index) => {
          return (
            <WorkDetContainer key={index}>
              <RightIcon />
              <WorkDetails>{exp}</WorkDetails>
            </WorkDetContainer>
          );
        })}
      </DisplayResume>
    </Flexbox>
    <PlaceholderBot />
    </>
  );
}

export default ExperiencesInteractiveMenu;

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  height: 350px;
  color: rgb(255, 255, 255);
  @media only screen and (max-width: 785px) {
    flex-direction: column;
  }
`;

const DisplayResume = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em auto 1em 2em;
`;

const WorkHeading = styled.h1`
  font-weight: 700;
  @media only screen and (max-width: 715px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    width: 80vw;
  }
`;

const WorkDate = styled.h4`
  font-size: 0.9em;
  font-weight: 100;
  opacity: 0.6;
  margin-top: 1em;
`;

const WorkDetails = styled.p`
  margin-top: 0;
  font-size: 0.9em;
  width: 500px;
  @media only screen and (max-width: 715px) {
    width: 400px;
  }
  @media only screen and (max-width: 500px) {
    width: 80vw;
  }
`;

const WorkDetContainer = styled(ListItem)`
  display: flex;
  height: auto;
`;

const RightIcon = styled(ChevronRightIcon)`
  margin: 0 0.5em auto 0;
`;

const ItemList = styled(List)`
  width: 250px;
  @media only screen and (max-width: 785px) {
    display: flex;
    flex-direction: row;
    width: 150px;
  }
  @media only screen and (max-width: 715px) {
    width: 190px;
  }
`;

const PlaceholderBot = styled.div`
  height: 0px;
  width: auto;
  @media only screen and (max-width: 785px) {
    height: 100px;
  }
`;