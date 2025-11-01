import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>
      <p className="text-center max-w-xl mx-auto mb-8">
        Have a question or ready to book your next tour? Reach out anytime – we’re happy to help plan your Halifax adventure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
            <p>Halifax, Nova Scotia</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <a href="tel:+19024027263" className="text-blue-600 hover:underline font-semibold">1 (902) 402-7263</a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <a href="mailto:info@safiseasidetours.ca" className="text-blue-600 hover:underline font-semibold">info@safiseasidetours.ca</a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">WhatsApp</h2>
            <a href="https://wa.me/19024027263" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-semibold">Chat with us</a>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            title="Halifax Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93852.53522703612!2d-63.67459413674822!3d44.64860209833515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a234cb2587dbd%3A0x2e22a2a54ef02b9a!2sHalifax%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1698834000000!5m2!1sen!2sca"
            width="100%" height="350" style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <form className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
        <input type="text" placeholder="Your Name" className="w-full border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <input type="email" placeholder="Your Email" className="w-full border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <textarea placeholder="Your Message" rows="5" className="w-full border-gray-300 border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
        <button type="submit" className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
