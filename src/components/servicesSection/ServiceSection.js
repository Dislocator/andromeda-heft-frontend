import React from "react";
import { useSelector } from "react-redux";
import { serviceCardsData } from "../../mockData/serviceCards/serviceCardsElements";
import ServiceCard from "../serviceCard/ServiceCard";
import { ServicesContainer, ServicesWrapper } from "./ServiceSectionElements";

const ServiceSection = () => {
  const showGenerator = useSelector((state) => state.ui.generatorForm);
  return (
    <ServicesContainer id="services" showGenerator>
      <ServicesWrapper>
        {serviceCardsData.map((card, index) => (
          <ServiceCard {...card} key={index} />
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServiceSection;
