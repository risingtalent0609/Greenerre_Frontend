import React from "react";

//import Components
import Banner from "../../components/Banner/Banner";
import ServiceContent from "../../components/ServiceContent/ServiceContent";

const Services = () => {
  return (
    <div className="mt-[100px]">
      <Banner title="Products and Services" />
      <ServiceContent />
    </div>
  );
};

export default Services;
