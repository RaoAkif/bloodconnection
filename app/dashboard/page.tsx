"use client";

import Image from "next/image";
import { MdBloodtype } from "react-icons/md";
import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Top Navigation Bar */}
      <header className="w-full bg-white shadow fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-poppins text-primary">BloodConnection</div>
          
          {/* Top Nav Links and Avatar for Medium and Larger Screens */}
          <div className="hidden md:flex items-center space-x-4 -mb-3">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 font-roboto"
              aria-label="Go to Dashboard"
              role="link"
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 font-roboto"
              aria-label="View Requests"
              role="link"
            >
              Requests
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 font-roboto"
              aria-label="View Profile"
              role="link"
            >
              Profile
            </a>
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={50}
              height={50}
              className="w-10 h-10 rounded-full border-2 border-gray-200"
              aria-hidden="true"
            />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={handleSidebarToggle}
            className="block md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle Menu"
            aria-expanded={isSidebarOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-row mt-16 min-h-screen">
        {/* Left Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-gray-100 z-20 transform md:relative md:translate-x-0 md:w-1/6 w-full ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <nav className="space-y-4">
            <a
              href="#"
              className="block p-2 text-lg font-semibold hover:bg-gray-200 rounded font-roboto"
              onClick={handleLinkClick}
              aria-label="Go to Dashboard"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block p-2 text-lg font-semibold hover:bg-gray-200 rounded font-roboto"
              onClick={handleLinkClick}
              aria-label="View Requests"
            >
              Requests
            </a>
            <a
              href="#"
              className="block p-2 text-lg font-semibold hover:bg-gray-200 rounded font-roboto"
              onClick={handleLinkClick}
              aria-label="View Profile"
            >
              Profile
            </a>
          </nav>
        </div>

        {/* Right Column: Main Content */}
        <div className="md:w-5/6 w-full p-6 bg-white ml-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold font-poppins text-primary">Welcome Back, Donor!</h1>

            {/* Search Bar Component */}
            <div className="relative mb-6">
              <label htmlFor="search-bar" className="sr-only">Search for blood donors or requests</label>
              <input
                id="search-bar"
                type="text"
                className="w-full border border-gray-300 bg-gray-50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search for blood donors or requests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for blood donors or requests"
              />
            </div>

            {/* Interactive Cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {/* Next Donation Card */}
              <div className="bg-red-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-2xl font-semibold mb-2 font-poppins text-primary">Next Donation</h2>
                <p className="text-lg font-roboto">Friday, 25th September</p>
                <button 
                  className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  aria-label="Donate Now"
                >
                  Donate Now
                </button>
              </div>

              {/* Blood Requests Card */}
              <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-2xl font-semibold mb-2 font-poppins text-accent">Blood Requests</h2>
                <p className="text-lg font-roboto">2 Pending Requests</p>
                <button 
                  className="mt-4 bg-accent text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200"
                  aria-label="View Blood Requests"
                >
                  View Requests
                </button>
              </div>
            </div>

            {/* Primary and Secondary Buttons */}
            <div className="flex space-x-4">
              {/* Primary Button */}
              <button 
                className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-200"
                aria-label="Donate Now"
              >
                Donate Now
              </button>

              {/* Secondary Button */}
              <button 
                className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-200"
                aria-label="Request Blood"
              >
                Request Blood
              </button>
            </div>

            {/* Blood Group Icon Example */}
            <div className="flex items-center mt-6">
              <MdBloodtype className="text-primary w-6 h-6 mr-2" aria-hidden="true" />
              <span className="text-lg font-roboto">Your Blood Group: O+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
