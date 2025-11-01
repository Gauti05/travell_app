import React, { useState } from 'react';

const faqs = [
  {q: "How do I book a tour?", a: "You can book by contacting us via phone, email, or through our website contact form."},
  {q: "What is your cancellation policy?", a: "We require 24 hours notice for cancellations to avoid fees."},
  {q: "Are meals included?", a: "Tours include complimentary Nova Scotia Lobster Rolls and refreshments."},
  {q: "What pickup options are available?", a: "We offer door-to-door pickup and private airport transfers."},
  {q: "Can I customize my itinerary?", a: "Yes, custom tours can be designed to your interests and schedule."},
  {q: "Are tours available year-round?", a: "Tours operate seasonally, typically from April to October."},
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h1>
      {faqs.map(({q,a}, i) => (
        <div key={q} className="border rounded-lg shadow-sm">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)} 
            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <span className="font-semibold text-lg">{q}</span>
            <span className="text-xl">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <p className="px-6 pb-4 text-gray-700">{a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
