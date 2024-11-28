import React from "react";
import webDesignLogo1 from "../../assets/img1.png";
import webDesignLogo3 from "../../assets/img3.png";

const ProjectCard = ({ image, category, title, isDarkMode }) => {
  console.log(isDarkMode, "project");

  return (
    <div className="flex flex-col items-center">
      {/* Image Section */}
      <div
        className={`rounded-lg overflow-hidden  transition-transform duration-300 hover:scale-105 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover"
        />
      </div>
      <div className="w-full text-start mt-10">
        <p className="text-lg font-medium text-orange-400">{category}</p>
        <p className="text-xl font-semibold text-black">{title}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  // Example project data
  const projects = [
    {
      image: webDesignLogo1,
      category: "Web Design ",
      title: "AirCalling Landing Page Design ",
    },
    {
      image: webDesignLogo1,
      category: "Web Design ",
      title: "Business Landing Page Design ",
    },
    {
      image: webDesignLogo3,
      category: "Web Design ",
      title: "Ecom Web Page Design ",
    },
  ];

  // Replace this with a dark mode state if needed
  const isDarkMode = false;

  return (
    <section
      className={`py-16 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            My Projects
          </h2>
          <p
            className={`mb-8 text-lg text-center ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
