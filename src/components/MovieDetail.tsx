// import { useParams } from "react-router-dom";
// import useDetailsById from "../hooks/useDetailsById";

// const MovieDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const { details, error } = useDetailsById(Number(id));

//   if (details === null) {
//     return <div>No information found, please try again.</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   const imageUrl = details.poster_path
//     ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
//     : "/placeholder-image.jpg"; // Use a placeholder image URL or provide a default image

//   return (
//     <div>
//       <h1>{details.original_title}</h1>
//       <img src={imageUrl} alt={details.original_title} />
//       {/* Display other movie details here */}
//     </div>
//   );
// };

// export default MovieDetail;

import { useParams } from "react-router-dom";
import useDetailsById from "../hooks/useDetailsById";
import noImage from "../assets/Image_not_available.png";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { details, error } = useDetailsById(Number(id));

  const imageUrl = details?.poster_path
    ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
    : noImage;

  return (
    <div>
      {error ? (
        <div className="error-message-id">
          <p>(Error 404)😞</p>
          <p> Information about this movie was not found.</p>
        </div>
      ) : (
        details && (
          <>
            <h1>{details.original_title}</h1>
            <img src={imageUrl} alt={details.original_title} />
            {/* Display other movie details here */}
          </>
        )
      )}
    </div>
  );
};

export default MovieDetail;
