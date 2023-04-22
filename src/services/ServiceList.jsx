import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "United States and International Weather Conditions",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Our trusted partners help our travel agents provide you with extraordinary experiences around the globe",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "When you’re ready to learn more, contact one of our travel professionals to answer your questions and help you personalize the ideal vacation.",
  },
];

function ServiceList() {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md='6' sm='12' key={index}>
          <ServiceCard item={item}/>
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
