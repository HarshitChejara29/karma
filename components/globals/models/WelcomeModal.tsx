"use client";

import React from 'react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-lg font-bold mb-4">Welcome to 100 KARMA</h2>
        <p className="mb-6">Please choose how you would like to continue with:</p>
        <div className="flex justify-center">
          <a href="https://100karma.com/">
            <button className="bg-[#79cdc5] text-white px-4 py-2 rounded mr-2" onClick={onClose}>100 Karma</button>
          </a>
          <a href="/">
            <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClose}>this site</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;