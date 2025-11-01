import React from 'react';

export default function Transfers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-8 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-8">Airport Transfers</h1>
     <img 
  src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80" 
  alt="Airport transfer vehicle" 
  className="rounded-lg mx-auto mb-6"
/>

      <p className="text-lg leading-relaxed">
        Arrive and depart Halifax in comfort with our private airport transfer service. Our professional driver meets you upon arrival and ensures a smooth, scenic ride in a clean, air-conditioned SUV — perfect for individuals, couples, and small groups.
      </p>
      <ul className="list-disc list-inside space-y-3 text-blue-700 font-semibold">
        <li>Private pick-up and drop-off at Halifax Stanfield International Airport</li>
        <li>Comfortable SUVs with air conditioning</li>
        <li>Professional, courteous drivers</li>
        <li>Door-to-door service</li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-8 block mx-auto transition transform hover:scale-105">
        Book Your Transfer
      </button>
    </div>
  );
}
