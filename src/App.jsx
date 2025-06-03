import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2">Simon</h1>
      <p className="text-gray-600 mb-4">Frontend Developer • Portfolio</p>
      <div className="flex gap-4">
        <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
        <a href="mailto:you@example.com" className="text-blue-500 hover:underline">Email</a>
        <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
      </div>
    </main>
  );
}


export default App
