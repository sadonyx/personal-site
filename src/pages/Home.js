//styles
import styled from "styled-components";
import { IoMailSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
//components
import Heading from "../Components/Heading";
import AboutMe from "../Components/AboutMe";
import WorkExperience from "../Components/WorkExperience";
import SoftwareCreations from "../Components/SoftwareCreations";
import Three from "../3d/Earth";
import FadeInSection from "../util/FadeInSection";
//dependencies
import { Link, Element } from "react-scroll";

const Home = () => {
  return (
    <Container direction="column">
      <ThreeDiv>
        <Three />
      </ThreeDiv>
      <Element name="heading">
        <FadeInSection>
          <Heading />
        </FadeInSection>
      </Element>
      <Element name="aboutme">
        <FadeInSection>
          <AboutMe />
        </FadeInSection>
      </Element>
      <Element name="workexperience">
        <FadeInSection>
          <WorkExperience />
        </FadeInSection>
      </Element>
      <Element name="softwarecreations">
        <FadeInSection>
          <SoftwareCreations />
        </FadeInSection>
      </Element>
      <Navbar>
        <LinkContainer
          role="button"
          activeClass="active"
          to="heading"
          spy={true}
          smooth={true}
          duration={500}
        >
          /home
        </LinkContainer>
        <LinkContainer
          role="button"
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
        >
          /about
        </LinkContainer>
        <LinkContainer
          role="button"
          activeClass="active"
          to="workexperience"
          spy={true}
          smooth={true}
          duration={500}
        >
          /experience
        </LinkContainer>
        <LinkContainer
          role="button"
          activeClass="active"
          to="softwarecreations"
          spy={true}
          smooth={true}
          duration={500}
        >
          /creations
        </LinkContainer>
        <IconContainer>
          <a
            href="https://github.com/sadonyx"
            target="_blank"
            rel="noreferrer noopener"
            role="button"
          >
            <GitHubIcon src="https://img.icons8.com/material-outlined/24/ffffff/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/adnanshihabi/"
            target="_blank"
            rel="noreferrer noopener"
            role="button"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:adnan@ashihabi.me?subject=Contacting you from your website"
            role="button"
          >
            <EmailIcon />
          </a>
        </IconContainer>
      </Navbar>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;

  height: auto;
  margin: auto;
  background-color: transparent;
  color: rgb(224, 224, 224);

  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 85vw;
  }
  @media only screen and (max-width: 500px) {
    margin: auto 0 auto 3vw;
    width: 85vw;
  }
`;

const ThreeDiv = styled.div`
  width: 100%;
  height: 45vh;
  margin-top: 10vh;
  margin-left: 0;
  margin-right: auto;
  border-radius: 100px;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  position: fixed;
  bottom: 3vh;
  right: 3vw;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  color: rgb(51, 143, 129);
`;

const LinkContainer = styled(Link)`
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  :hover {
    color: rgb(255, 255, 255);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 0;
  color: rgb(51, 143, 129);

  margin-top: 10px;
`;

const GitHubIcon = styled(IoLogoGithub)`
  width: 22px;
  height: auto;

  margin: auto 2px auto 2px;

  :hover {
    color: rgb(255, 255, 255);
  }
`;

const LinkedInIcon = styled(IoLogoLinkedin)`
  width: 22px;
  height: auto;

  margin: auto 2px auto 2px;

  :hover {
    color: rgb(255, 255, 255);
  }
`;

const EmailIcon = styled(IoMailSharp)`
  width: 22px;
  height: auto;

  margin: auto 2px auto 2px;

  :hover {
    color: rgb(255, 255, 255);
  }
`;
