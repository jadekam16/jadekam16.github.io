import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout () {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[200vh]"
        style={{
          backgroundImage: `url(${require('../assets/bg.jpg')})`,
        }}
        alt="Background"
      ></div>

      {/* Content and Navbar */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
