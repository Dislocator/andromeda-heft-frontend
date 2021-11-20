import React from "react";
import { Button } from "../buttons/ButtonElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoHeading,
  InfoRow,
  InfoSubtitle,
  InfoWrapper,
  TextWrapper,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  dark,
  primary,
}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <InfoHeading lightText={lightText}>{headLine}</InfoHeading>
              <InfoSubtitle darkText={darkText}>{description}</InfoSubtitle>
              <BtnWrap>
                <Button
                  smooth={true}
                  duration={500}
                  spy={500}
                  exact="true"
                  offset={-80}
                  to="home"
                  primary={primary}
                  dark={dark}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
