import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to News Portal
          </h1>
          <p className="text-lg mb-8">
            Stay updated with the latest news across various industries including Technology, Business, and more.
          </p>
          <div>
            <Link to="/tesla" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 mr-4">
              Tesla News
            </Link>
            <Link to="/business" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Business News
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
            <p>Get the latest updates on Tesla and electric vehicles.</p>
          </Link>
          <Link to="/business" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Business</h3>
            <p>Stay informed about business news and market trends.</p>
          </Link>
          <Link to="/techcrunch" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">TechCrunch</h3>
            <p>Catch up with the latest in technology and innovation.</p>
          </Link>
          <Link to="/" className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">More</h3>
            <p>Explore other categories for more exciting content.</p>
          </Link>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-500 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to get the latest news delivered directly to your inbox.
          </p>
          <button className="bg-white text-orange-500 px-6 py-3 rounded-md hover:bg-gray-100">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
