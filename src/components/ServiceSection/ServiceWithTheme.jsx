import React from "react";
import { Palette, Globe, Smartphone, Layout } from "lucide-react";
import uxLog from "../../assets/ui&ux.png";
import webLogo from "../../assets/webDesign.png";
import appLogo from "../../assets/appDesign.png";
import GraphicLog from "../../assets/Graphics Design.png";

const ServiceCard = ({ icon: Icon, title, description, isDarkMode }) => {
  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 ${
        isDarkMode
          ? "bg-[#F8F8F8F8] hover:bg-gray-300 text-black"
          : "bg-[#F8F8F8F8] hover:bg-gray-300"
      }`}
    >
      <div className="space-y-4">
        <div className="w-12 h-12  rounded-lg flex items-center justify-center">
          <img src={Icon} alt="Mumair Logo" />
          {/* <Icon className="text-white" size={24} /> */}
        </div>

        <h3
          className={`text-xl font-semibold ${
            isDarkMode ? "text-black" : "text-black"
          }`}
        >
          {title}
        </h3>

        <p className={`text-sm ${isDarkMode ? "text-black" : "text-black"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = ({ isDarkMode }) => {
  const services = [
    {
      icon: uxLog,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with modern design principles and best practices.",
    },
    {
      icon: webLogo,
      title: "Web Development",
      description:
        "Building responsive and performant websites using the latest web technologies and frameworks.",
    },
    {
      icon: appLogo,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications that provide seamless user experiences.",
    },
    {
      icon: GraphicLog,
      title: "Graphic Design",
      description:
        "Crafting visually appealing designs that communicate your brand message effectively.",
    },
  ];

  return (
    <div
      className={` py-20 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Services
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            We offer comprehensive digital solutions to help your business grow
            and succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
