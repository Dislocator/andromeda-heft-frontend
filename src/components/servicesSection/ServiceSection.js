import React from "react";
import { serviceCardsData } from "../../mockData/serviceCards/serviceCardsElements";
import ServiceCard from "../serviceCard/ServiceCard";
import { ServicesContainer, ServicesWrapper } from "./ServiceSectionElements";

const ServiceSection = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        {serviceCardsData.map((card, index) => (
          <ServiceCard {...card} key={index} />
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServiceSection;
