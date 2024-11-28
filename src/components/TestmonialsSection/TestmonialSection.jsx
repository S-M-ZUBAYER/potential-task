import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, isDarkMode, isActive }) => {
  return (
    <div
      className={`p-8 rounded-xl transition-all duration-300 ${
        isActive
          ? `${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform scale-100 opacity-100`
          : "bg-transparent transform scale-95 opacity-50"
      }`}
    >
      <div className="flex gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <Quote
            className={`w-8 h-8 ${
              isDarkMode ? "text-orange-400" : "text-orange-500"
            }`}
          />
          <p
            className={`text-base ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {testimonial.quote}
          </p>
          <div>
            <h4
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {testimonial.name}
            </h4>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = ({ isDarkMode = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/04/99/69/20/1000_F_499692090_CfWYTOWgnizEW2JU7DYkWo5Iu2r40SF3.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna sed neque mattis id tellus orci condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices...",
      name: "Name",
      position: "CEO",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/04/99/69/20/1000_F_499692090_CfWYTOWgnizEW2JU7DYkWo5Iu2r40SF3.jpg",
      quote:
        "Another great testimonial showcasing our work and dedication to excellence in every project we undertake...",
      name: "John Doe",
      position: "CTO",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/04/99/69/20/1000_F_499692090_CfWYTOWgnizEW2JU7DYkWo5Iu2r40SF3.jpg",
      quote:
        "Working with this team has been an amazing experience that transformed our business processes completely...",
      name: "Jane Smith",
      position: "Marketing Director",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/04/99/69/20/1000_F_499692090_CfWYTOWgnizEW2JU7DYkWo5Iu2r40SF3.jpg",
      quote:
        "The level of professionalism and attention to detail they bring to every project is simply outstanding...",
      name: "Sarah Wilson",
      position: "Product Manager",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className={`min-h-screen py-20 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Testimonials
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base ${
              isDarkMode ? "text-gray-900" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nisi lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-800 hover:bg-gray-100"
            } shadow-lg z-10`}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-800 hover:bg-gray-100"
            } shadow-lg z-10`}
          >
            <ArrowRight size={24} />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={testimonial}
                    isDarkMode={isDarkMode}
                    isActive={currentSlide === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-orange-500"
                    : `w-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
