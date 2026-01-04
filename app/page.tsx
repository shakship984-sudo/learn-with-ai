"use client";
import React, { useState } from 'react';

export default function LearnWithAi() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar with Security Tag */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">learn_with_Ai</h1>
        <button className="bg-blue-600 px-6 py-2 rounded-full font-semibold">Sign In</button>
      </nav>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">AI Video Transformation</h2>
          <p className="text-gray-400 italic">"Jaisa video me ho waise hi ai video me ho"</p>
        </div>

        {/* Input Area */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-dashed border-gray-700 p-10 rounded-2xl text-center">
              <p className="text-sm text-gray-500">Upload Image or Video</p>
              <input type="file" className="mt-4 text-xs" />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-sm mb-2">Paste Video Link</label>
              <input type="text" placeholder="https://..." className="bg-black border border-gray-700 p-4 rounded-xl outline-none focus:border-blue-500" />
            </div>
          </div>

          <label className="block text-sm mb-2">Transformation Prompt</label>
          <textarea 
            placeholder="Describe the AI look you want..." 
            className="w-full bg-black border border-gray-700 p-4 rounded-xl h-32 mb-6 outline-none focus:border-purple-500"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-bold text-xl hover:opacity-90">
            Generate 10s+ AI Video
          </button>
        </div>

        <p className="mt-10 text-center text-gray-600 text-sm">🛡️ Security Enabled | Free for 1 Year</p>
      </div>
    </div>
  );
}
