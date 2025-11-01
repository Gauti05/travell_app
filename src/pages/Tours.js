import React, { useState } from 'react';

const toursData = [
  {
    title: "Peggy’s Cove Tour",
    price: "$160/person",
    desc: "A half-day journey to the iconic lighthouse and coastal village, complete with scenic stops, photo moments, and local stories.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Lunenburg Tour",
    price: "$175/person",
    desc: "Visit one of Canada’s prettiest harbor towns, famous for its architecture, fisheries museum, and heritage charm.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Combo Tour",
    price: "$200/person",
    desc: "See the best of both worlds in a full-day adventure filled with sea views, maritime history, and local flavor.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Custom Tours",
    price: "$175–$200/person",
    desc: "Build your perfect Nova Scotia experience. Wine tasting, trails, or hidden gems, designed just for you.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Tours() {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-extrabold text-center mb-10">Tours & Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toursData.map(({title, price, desc, img}) => (
          <div 
            key={title} 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => setSelectedTour(title)}
          >
            <img src={img} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-blue-600 font-semibold mb-2">{price}</p>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-xl relative shadow-xl">
            <button 
              onClick={() => setSelectedTour(null)} 
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-3xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedTour}</h3>
            <p>Booking functionality coming soon. Thank you for your interest!</p>
          </div>
        </div>
      )}
    </div>
  );
}
