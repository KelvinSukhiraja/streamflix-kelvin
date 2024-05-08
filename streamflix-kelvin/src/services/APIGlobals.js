import axios from "axios";
import { SlugId } from "./Slug";

const BASEURL = "https://api.themoviedb.org/3";
const APIKEY = "2e65b9283fb2bea5e3b2cf4ec2d1b5df";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${BASEURL}/movie/now_playing?api_key=${APIKEY}&region=ID`
  );
  return movie.data.results;
};

export default getMovieList;
