import React, { useState, useEffect } from 'react';

const tours = [
  {title: "Peggy’s Cove Tour", desc: "Iconic lighthouse views and rugged seascapes."},
  {title: "Lunenburg Tour", desc: "A colorful UNESCO World Heritage Town."},
  {title: "Combo Tour", desc: "Peggy’s Cove and Lunenburg together for the ultimate day trip."},
  {title: "Custom Tours", desc: "Tailored experiences designed just for you."},
];

const testimonials = [
  {text: "An unforgettable experience with amazing local insights!", author: "Sarah M."},
  {text: "Asif made our trip so special with his kindness and knowledge.", author: "John D."},
  {text: "Comfortable, scenic, and perfectly paced tours. Highly recommend!", author: "Emily R."},
];

export default function Home() {
  const [currentTour, setCurrentTour] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const tourTimer = setInterval(() => {
      setCurrentTour((prev) => (prev + 1) % tours.length);
    }, 4000);
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      clearInterval(tourTimer);
      clearInterval(testimonialTimer);
    }
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="space-y-16">

   
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
       
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.videvo.net/videvo_files/video/free/2019-12/small_watermarked/191003_17_BeachTown_02_preview.webm"
          type="video/webm"
        />
   
        <div className="absolute inset-0 bg-black opacity-50"></div>
      
        <div className="relative z-10 max-w-5xl px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg animate-slideInDown">
            Explore Nova Scotia's Coastal Wonders
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md animate-fadeIn delay-300">
            Customized Private Tours with Local Guides & Authentic Experiences
          </p>
          <button 
            onClick={() => scrollTo('tours')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition transform hover:scale-110"
          >
            Book Your Adventure
          </button>
        </div>
    
        <a
          href="https://wa.me/19024027263"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v7a4 4 0 004 4h10a4 4 0 004-4v-7a4 4 0 00-4-4H7a4 4 0 00-4 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v4l3-2 3 2v-4" />
          </svg>
          <span>WhatsApp Chat</span>
        </a>

        <style>{`
          @keyframes slideInDown {
             0% {opacity: 0; transform: translateY(-30px);}
             100% {opacity: 1; transform: translateY(0);}
           }
          .animate-slideInDown {
            animation: slideInDown 1s ease forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease forwards;
          }
          .animate-fadeIn.delay-300 {
            animation-delay: 0.3s;
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
          @keyframes bounce {
            0%, 100% {transform: translateY(0);}
            50% {transform: translateY(-10px);}
          }
        `}</style>
      </section>

     
      <section className="max-w-4xl mx-auto px-4 text-gray-800 text-center">
        <p className="text-lg md:text-xl">
          Discover Nova Scotia’s breathtaking coastline, vibrant fishing towns, and maritime charm with Safi Seaside Tours. 
          Comfortable private tours mixing scenic beauty, history, and genuine local hospitality, creating unforgettable journeys.
        </p>
      </section>

     
      <section id="tours" className="max-w-5xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Top Tours Preview</h2>
        <div className="relative flex items-center">
          <button 
            onClick={() => setCurrentTour((currentTour - 1 + tours.length) % tours.length)} 
            className="absolute left-0 z-20 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900"
            aria-label="Previous Tour"
          >‹</button>
          <div className="flex overflow-hidden rounded-lg shadow-lg w-full justify-center px-16">
            {tours.map((tour, idx) => (
              <div 
                key={tour.title} 
                className={`min-w-[300px] max-w-[300px] p-6 bg-white rounded-lg transition-transform duration-500 ${idx === currentTour ? 'scale-100 opacity-100 z-10' : 'scale-75 opacity-40 pointer-events-none absolute'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p>{tour.desc}</p>
                <button 
                  onClick={() => alert(`Booking: ${tour.title}`)} 
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentTour((currentTour + 1) % tours.length)} 
            className="absolute right-0 z-20 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900"
            aria-label="Next Tour"
          >›</button>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 text-center text-gray-800 space-y-6">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <div className="flex flex-wrap justify-around mt-6 gap-8">
          <CounterStat start={0} end={15} label="Years of Experience" />
          <CounterStat start={0} end={1000} label="Tours Conducted" />
          <CounterStat start={0} end={98} label="5-Star Reviews (%)" />
          <CounterStat start={0} end={24} label="Door-to-door Service (hours daily)" />
        </div>
      </section>

 
      <section className="max-w-4xl mx-auto px-4 mt-16 bg-gray-100 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="relative">
          <button 
            onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900"
            aria-label="Previous Testimonial"
          >‹</button>
          <div className="max-w-xl mx-auto text-center text-gray-700 italic">
            <p>&quot;{testimonials[currentTestimonial].text}&quot;</p>
            <p className="mt-4 font-semibold">- {testimonials[currentTestimonial].author}</p>
          </div>
          <button 
            onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900"
            aria-label="Next Testimonial"
          >›</button>
        </div>
      </section>

    </div>
  );
}

function CounterStat({start, end, label}) {
  const [count, setCount] = React.useState(start);
  React.useEffect(() => {
    let current = start;
    const increment = Math.ceil((end - start) / 50);
    const interval = setInterval(() => {
      current += increment;
      if(current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(current);
    }, 40);
    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div className="w-40 p-4 rounded-lg bg-white shadow">
      <div className="text-5xl font-bold text-blue-600">{count}</div>
      <div className="text-lg mt-2">{label}</div>
    </div>
  );
}
