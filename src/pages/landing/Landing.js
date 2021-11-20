import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HeroSection from "../../components/heroSection/HeroSection";
import InfoSection from "../../components/infoSection/InfoSection";
import ServiceSection from "../../components/servicesSection/ServiceSection";
import { infoObjects } from "../../mockData/infoSection/infoSectionElements";
import { toggleSidebar } from "../../store/actions";
const Landing = () => {
  return (
    <div>
      <HeroSection />
      {infoObjects.map((infoSection, index) => (
        <InfoSection {...infoSection} key={index} />
      ))}
      <ServiceSection />
    </div>
  );
};

export default Landing;
