"use client"
import React, { useState } from "react";
import ChildComponent from "../child/page"; // Import ChildComponent
import { toast } from 'react-toastify';
const ParentComponent: React.FC = () => {
  // State to store user input
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("");
  const [isRendered, setIsRendered] = useState(false); // To track if render button is clicked

  // Handle render button click
  const handleRender = () => {
    // Check if any input field is empty
    if (!fullName || !age || !occupation) {
      toast.warning("Please fill in all fields before rendering.",{delay: 3000, position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      setIsRendered(false); // Don't allow render if fields are not filled
    } else {
      setIsRendered(true); // Allow render when all fields are filled
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Enter Your Details</h2>
        
        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Update fullName state
          />
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))} // Update age state
          />
        </div>

        {/* Occupation Input */}
        <div className="mb-6">
          <label className="block text-gray-700">Occupation</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)} // Update occupation state
          />
        </div>

        {/* Render Button */}
        <button
          onClick={handleRender}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Render
        </button>

        {/* Display ParentComponent with user input when Render button is clicked */}
        {isRendered ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-center">Preview:</h3>
            <ChildComponent
              fullName={fullName}
              age={age}
              occupation={occupation}
            />
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-500">
            <p>Please fill in all fields to see the preview.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
