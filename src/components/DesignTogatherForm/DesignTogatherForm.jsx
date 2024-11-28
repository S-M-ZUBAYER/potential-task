import React, { useState } from "react";

const DesignTogetherForm = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    // Here you would typically handle the form submission
    setMessage("Thanks for contacting us!");
    setEmail("");
  };

  return (
    <div
      className={`w-full min-h-[300px] p-8 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h1
          className={`text-5xl text-center font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Let's Design Together
        </h1>

        <p
          className={`mb-8 text-lg text-center ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus tellus in. Aliquet donec morbi convalis pretium.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-0 md:flex md:gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className={`w-full md:flex-1 px-4 py-2 rounded-md border 
              focus:outline-none focus:ring-2 
              focus:ring-orange-500 transition-colors
              ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
          />

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-orange-500 
              text-white rounded-md hover:bg-orange-600 
              transition-colors duration-200 font-medium"
          >
            Contact Me
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 ${
              message.includes("Thanks") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DesignTogetherForm;
