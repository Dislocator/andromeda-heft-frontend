import React from "react";
import { H1, P } from "../../theme/Fonts";
import { Button } from "../buttons/ButtonElements";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg />
      <HeroContent>
        <H1>Keine Berichtshefte mehr schreiben!</H1>
        <HeroP>Mit Andromeda der Berichtsheft ist in 3 minuten fertig!</HeroP>
        <HeroBtnWrapper>
          <Button dark="true" primary="true" fontBig="true">
            Starten!
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
