import React from "react";
import bgImage from "../Hero/hero.mp4";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={bgImage} type="video/mp4" autoPlay loop muted></HeroVideo>
      <Container>
        <MainHeading>E-Learning content for civil exam aspirants</MainHeading>
        <HeroText>
          We provide the best content for civil exam all over the india.
        </HeroText>
        <ButtonWrapper>
          <Link to="/Login">
            <Button>Get Started</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
