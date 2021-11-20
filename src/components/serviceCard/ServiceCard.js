import React from "react";
import { Button } from "../buttons/ButtonElements";
import {
  CardBody,
  ServiceCardContainer,
  ServiceH1,
  ServiceIcon,
  ServiceMoneyTag,
  ServiceP,
  ServicePriceSection,
  ServicesH2,
} from "./CardElements";

const ServiceCard = ({
  icon,
  title,
  features,
  price,
  primary,
  dark,
  buttonLabel,
}) => {
  return (
    <ServiceCardContainer>
      <ServiceIcon src={icon} />
      <CardBody>
        <ServicesH2>{title}</ServicesH2>
        {features.map((feature, index) => (
          <ServiceP key={index}>{feature}</ServiceP>
        ))}
        <ServicePriceSection>
          <ServiceMoneyTag>€</ServiceMoneyTag>
          <ServiceH1>{price}</ServiceH1>
        </ServicePriceSection>
      </CardBody>
      <Button primary={primary} dark={dark}>
        {buttonLabel}
      </Button>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
