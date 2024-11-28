import React from "react";
import profileImg from "../../assets/aboutLogo.png";
import { RiAccountCircleFill } from "react-icons/ri";
const SkillBar = ({ skill, percentage, isDarkMode }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span
          className={`text-sm font-medium ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {skill}
        </span>
        <span
          className={`text-sm font-medium ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {percentage}%
        </span>
      </div>
      <div
        className={`w-full h-2 rounded-full ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div
          className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const AboutSection = ({ isDarkMode }) => {
  const skills = [
    { name: "UX", percentage: 90 },
    { name: "Website Design", percentage: 85 },
    { name: "App Design", percentage: 80 },
    { name: "Graphic Design", percentage: 75 },
  ];

  return (
    <section
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300 py-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* <div className="absolute left-10 bottom-[340px] bg-[#FD6F00]/50 p-4 w-60 h-12 z-10"></div> */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-visible bg-white relative">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-[448px] object-cover overflow-visible absolute left-2 bottom-0"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div>
              <h2
                className={`text-5xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                About Me
              </h2>
              <p
                className={`text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nisi lectus mattis in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-2">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Remove the separate theme state and just pass through the props
const AboutWithTheme = ({ isDarkMode }) => {
  return <AboutSection isDarkMode={isDarkMode} />;
};

export default AboutWithTheme;
