'use client';
import React from 'react';

const About = () => {
  const leadershipTeam = [
    { name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150?text=John+Doe" },
    { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150?text=Jane+Smith" },
    { name: "Alice Johnson", role: "COO", image: "https://via.placeholder.com/150?text=Alice+Johnson" },
    { name: "Bob Brown", role: "CFO", image: "https://via.placeholder.com/150?text=Bob+Brown" },
  ];

  const globalLocations = [
    { city: "Atlanta, USA", image: "https://via.placeholder.com/200x100?text=Atlanta" },
    { city: "London, UK", image: "https://via.placeholder.com/200x100?text=London" },
    { city: "Bangalore, India", image: "https://via.placeholder.com/200x100?text=Bangalore" },
    { city: "Sydney, Australia", image: "https://via.placeholder.com/200x100?text=Sydney" },
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-[#f0f9ff] to-white px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      {/* Hero Section */}
      <div className="w-full bg-[url('https://via.placeholder.com/1920x600?text=About+Us')] bg-cover bg-center py-32 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Reimagining Businesses for the Digital Age</h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We are one of the fastest-growing transformational workforce solution providers, helping global enterprises thrive in the digital age.
        </p>
      </div>

      {/* History Section */}
      <div className="mt-16 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0732EF] text-center mb-8">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0732EF] mb-4">From Humble Beginnings</h3>
            <p className="text-gray-700">
              Founded in 2007, NLB Services started as a small workforce solutions provider and has grown into a global leader in talent and digital solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0732EF] mb-4">Global Expansion</h3>
            <p className="text-gray-700">
              Today, we operate in 15 global locations, serving Fortune 500 companies and delivering innovative solutions to bridge the talent gap.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mt-20 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0732EF] text-center mb-8">Executive Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#0732EF]">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Footprint Section */}
      <div className="mt-20 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0732EF] text-center mb-8">Our Global Footprint</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalLocations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={location.image}
                alt={location.city}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#0732EF]">{location.city}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 w-full bg-gradient-to-br from-[#0A4BF5] to-[#0732EF] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
          <div>
            <h3 className="text-5xl font-bold">15</h3>
            <p className="text-lg">Global Locations</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">8000+</h3>
            <p className="text-lg">Skilled Professionals</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">Fortune 500</h3>
            <p className="text-lg">Multinational Clients</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 w-full max-w-7xl mx-auto text-center">
        <a
          href="#"
          className="inline-block bg-[#0732EF] text-white px-8 py-4 rounded-lg hover:bg-[#0A4BF5] transition-all duration-300 transform hover:scale-105"
        >
          Download Brochure
        </a>
      </div>
    </div>
  );
};

export default About;