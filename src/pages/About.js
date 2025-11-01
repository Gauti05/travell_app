import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 text-gray-800 px-4 py-8">
      <header className="text-center space-y-3 relative">
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Family-owned private tours since 2005</p>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
          alt="Nova Scotia coast"
          className="mx-auto rounded-lg shadow-lg object-cover h-48 w-full max-w-md"
        />
      </header>
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <article className="animate-slideInUp">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p>
            Founded by Asif Safi, a passionate traveler and local guide, Safi Seaside Tours offers authentic private and small group adventures across beautiful Nova Scotia. 
            With over 15 years of global tourism experience, Asif brings storytelling, comfort, and genuine connection to every trip.
          </p>
        </article>
        <article className="bg-blue-50 rounded p-4 animate-slideInRight delay-200">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>
            To provide personalized, memorable journeys showcasing the charm and coastal beauty of Nova Scotia, with local hospitality and ease.
          </p>
        </article>
        <article className="animate-slideInLeft delay-400">
          <h2 className="text-2xl font-bold mb-2">Message from Asif Safi</h2>
          <p className="italic text-lg">
            “Travel connects us to stories, places, and people. Let me show you the Nova Scotia I love — rich in history, beauty, and kindness.”
          </p>
        </article>
      </section>

      <style>{`
        @keyframes slideInUp {
          from {transform: translateY(40px); opacity: 0;}
          to {transform: translateY(0); opacity: 1;}
        }
        @keyframes slideInLeft {
          from {transform: translateX(-50px); opacity: 0;}
          to {transform: translateX(0); opacity: 1;}
        }
        @keyframes slideInRight {
          from {transform: translateX(50px); opacity: 0;}
          to {transform: translateX(0); opacity: 1;}
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
