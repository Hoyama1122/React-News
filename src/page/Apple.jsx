import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaApple, FaArrowAltCircleRight } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
const Apple = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-09-11&to=2024-09-11&sortBy=popularity&apiKey=d98cb21a5c014f519e559fad0563246f`
      );
      setdata(res.data.articles);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data: ", error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <main className="container mx-auto p-6 text-center bg-gradient-to-r from-black via-orange-500 to-orange-500 text-white rounded-lg shadow-md mb-8 mt-4">
          <h1 className="text-4xl font-bold mb-4">Apple</h1>
          <p className="text-lg">
            Get the latest updates about Tesla and the electric vehicle market
          </p>
        </main>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Circles
              height="80"
              width="80"
              color="orange"
              ariaLabel="loading"
            />
          </div>
        ) : data.length > 0 ? (
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data
              .filter((item) => item?.urlToImage)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {item?.title}
                  </h2>
                  {item?.urlToImage && (
                    <img
                      src={item?.urlToImage}
                      alt="Tesla news"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <p className="text-gray-700 mb-4">{item?.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      Read More
                      <FaArrowAltCircleRight />
                    </div>
                  </a>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-center text-gray-700">No news found</p>
        )}
      </div>
    </>
  );
};

export default Apple;
