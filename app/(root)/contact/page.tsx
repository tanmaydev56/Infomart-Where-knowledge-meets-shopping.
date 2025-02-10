import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Follow us on</h3>
          <div className="flex justify-center space-x-10 mt-2">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">Facebook</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">Twitter</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
