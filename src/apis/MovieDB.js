import axios from "axios";

export const searchItem = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: "72ad599573497944ea30b2babaf51f45",
  },
});
