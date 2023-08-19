import axios from "axios";

export default axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "8297b97458msha610e9f13c73523p1d60c7jsn8a3fe9c7e4fc",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});
