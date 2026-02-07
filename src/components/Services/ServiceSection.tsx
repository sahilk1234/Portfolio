import { serviceData } from "../../appData";
import SectionHeading from "../SectionHeading/SectionHeading";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section id="expertise" className="page-section">
      <SectionHeading
        title="// Expertise"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            shortDescription={service.shortDescription}
            stack={service.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
