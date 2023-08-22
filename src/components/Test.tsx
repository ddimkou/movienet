// genres

// import React, { useEffect } from "react";
// import axios from "../services/api-client"; // Make sure to adjust the path to your axios instance

// const Test: React.FC = () => {
//   useEffect(() => {
//     // Function to fetch and log movies about "Action" genre
//     const fetchMoviesByGenre = async () => {
//       try {
//         const response = await axios.get("/titles", {
//           params: {
//             genre: "Action", // Replace with the desired genre
//             info: "base_info", // You can customize the info you want to retrieve
//             limit: 10, // Number of titles per page
//             page: 1, // Page number
//             sort: "year.incr", // Sort by year ascending
//           },
//         });

//         console.log("Movies about Action genre:", response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     // Call the function to fetch movies when the component mounts
//     fetchMoviesByGenre();
//   }, []);

//   return (
//     <div>
//       <h1>Test Component</h1>
//       {/* Your JSX content here */}
//     </div>
//   );
// };

// export default Test;

// search

import React, { useEffect, useState } from "react";
import axios from "../services/api-client"; // Adjust the path to your axios instance

const Test: React.FC = () => {
  useEffect(() => {
    // Function to fetch search results for keyword "matrix"
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get("/titles/search/keyword/matrix", {
          params: {
            info: "base_info", // Customize info as needed
            limit: 10, // Limit the number of results
          },
        });

        console.log("Search Results:", response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    // Call the function to fetch search results when the component mounts
    fetchSearchResults();
  }, []);

  return (
    <div>
      <h1>Test Component</h1>
      {/* No rendering of search results */}
    </div>
  );
};

export default Test;
