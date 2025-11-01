import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 text-center text-sm">
      <div>Safi Seaside Tours – Guiding Unforgettable Journeys</div>
      <div className="my-2 space-x-2">
        <a href="/" className="hover:text-white">Home</a> | 
        <a href="/tours" className="hover:text-white">Tours & Experiences</a> | 
        <a href="/gallery" className="hover:text-white">Gallery</a> | 
        <a href="/faq" className="hover:text-white">FAQ</a> | 
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
      <div>Follow us: <a href="#" className="hover:text-white">Facebook</a> | <a href="#" className="hover:text-white">Instagram</a> | <a href="#" className="hover:text-white">TripAdvisor</a></div>
      <div className="mt-2">&copy; 2025 Safi Seaside Tours. All rights reserved.</div>
    </footer>
  );
}
