import axios from "axios";

const fetchRating = async (movieId: string) => {
  const options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/ratings`,
    headers: {
      "X-RapidAPI-Key": "8297b97458msha610e9f13c73523p1d60c7jsn8a3fe9c7e4fc",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const fetchedRating = response.data.results.averageRating;
    return fetchedRating;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchRating;
