import React, { useState } from 'react';

const photoUrls = [
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
];


export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-center text-4xl font-extrabold mb-10">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {photoUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Gallery photo ${i + 1}`}
            className="rounded-lg cursor-pointer object-cover w-full h-full"
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300"
            aria-label="Close gallery"
          >
            &times;
          </button>
          <img src={photoUrls[lightboxIndex]} alt={`Gallery photo large ${lightboxIndex + 1}`} className="max-h-[80vh] rounded-lg shadow-lg" />
          <button
            onClick={() => setLightboxIndex((lightboxIndex + photoUrls.length - 1) % photoUrls.length)}
            className="absolute left-6 text-white text-5xl font-bold hover:text-gray-300"
            aria-label="Previous photo"
            style={{top: '50%', transform: 'translateY(-50%)'}}
          >
            ‹
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % photoUrls.length)}
            className="absolute right-6 text-white text-5xl font-bold hover:text-gray-300"
            aria-label="Next photo"
            style={{top: '50%', transform: 'translateY(-50%)'}}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
