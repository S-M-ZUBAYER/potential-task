import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import profileImg from "../../assets/mam.png";
import { RiAccountCircleFill } from "react-icons/ri";
// Social Links Component
const SocialLinks = ({ isDarkMode }) => {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <div className="flex justify-center pt-4 ">
      <div className="flex gap-4 text-white">
        {socialLinks.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-black"
            } transition-colors`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

// Profile Image Component
const ProfileImage = () => {
  return (
    <div>
      <div className="relative">
        <div
          className={`absolute right-8 bottom-[370px]  bg-black  rounded-tr-full rounded-tl-full rounded-br-full z-20`}
        ></div>
        <div className="absolute right-12 bottom-[340px] bg-[#FD6F00]/50 p-4 w-60 h-12 z-10"></div>
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-visible bg-white relative">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-[448px] object-cover overflow-visible absolute left-2 bottom-0"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

const HeroSection = ({ isDarkMode }) => {
  return (
    <section
      className={`lg:py-28 relative min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-24 pb-20 gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hi I am
              </h2>
              <h1
                className={`lg:text-3xl md:text-2xl text-xl font-semibold text-[#FD6F00]`}
              >
                Muhammad Umair
              </h1>
              <div className="items-baseline gap-4">
                <h1
                  className={`lg:text-7xl md:text-7xl text-5xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  UI & UX
                </h1>
                <h1
                  className={`lg:text-7xl md:text-7xl text-5xl text-end font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Designer
                </h1>
              </div>
            </div>

            <p
              className={`max-w-xl text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nec lectus mattis id. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>

            <div className="space-y-8">
              <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end md:my-24 sm:my-20">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
