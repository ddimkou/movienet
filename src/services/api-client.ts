import axios from "axios";
import apiKey from "./apiKey";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});
