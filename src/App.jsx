import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutWithTheme from "./components/SkillBarSection/SkillBar";
import ServicesWithTheme from "./components/ServiceSection/ServiceWithTheme";
import ProjectsWithTheme from "./components/ProjectSection/ProjectSection";
import TestimonialsSection from "./components/TestmonialsSection/TestmonialSection";
import DesignTogetherForm from "./components/DesignTogatherForm/DesignTogatherForm";
import Footer from "./Footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Automatically detect system theme
  useEffect(() => {
    const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(matchDarkMode);

    setIsDarkMode(matchDarkMode.matches); // Set initial theme based on system preference

    // Listen for changes in system theme
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    matchDarkMode.addEventListener("change", handleChange);

    // Cleanup event listener
    return () => {
      matchDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  console.log(isDarkMode, "Dark");
  return (
    <div className="bg-gradient-to-b from-black to-blue-900 text-white">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutWithTheme isDarkMode={isDarkMode} />
      <ServicesWithTheme isDarkMode={isDarkMode} />
      <ProjectsWithTheme isDarkMode={isDarkMode} />
      <TestimonialsSection isDarkMode={isDarkMode} />
      <DesignTogetherForm isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
