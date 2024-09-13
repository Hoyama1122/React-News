import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Ultimate Source for Breaking News
          </h1>
          <p className="text-lg mb-8">
            Discover the hottest stories from the world of technology, business, and beyond. Stay informed, stay ahead.
          </p>
          <div>
            <Link to="/tesla" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 mr-4">
              Latest Tesla Insights
            </Link>
            <Link to="/business" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Apple Headlines You Can't Miss
            </Link>
          </div>
        </div>
      </div>

      {/* News Categories Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore News Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/tesla" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Tesla</h3>
            <p>Stay ahead with breaking news on Tesla and the electric vehicle revolution.</p>
          </Link>
          <Link to="/apple" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Apple</h3>
            <p>Dive into the latest market insights and Apple’s innovative breakthroughs.</p>
          </Link>
          <Link to="/techcrunch" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">TechCrunch</h3>
            <p>Keep your finger on the pulse of cutting-edge tech and innovation.</p>
          </Link>
          <Link to="/" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">More</h3>
            <p>Discover even more news categories packed with exciting stories.</p>
          </Link>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-500 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg mb-8">
            Don’t just keep up—lead the conversation! Get our top stories delivered straight to your inbox.
          </p>
          <button className="bg-white text-orange-500 px-6 py-3 rounded-md hover:bg-gray-100">
            Get Instant Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
