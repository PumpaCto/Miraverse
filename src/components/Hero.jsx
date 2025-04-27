import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section relative flex items-center justify-center min-h-screen bg-black text-white text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover opacity-20"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Logo animasyonu */}
        <img 
          src="/logo.png" 
          alt="Mir
