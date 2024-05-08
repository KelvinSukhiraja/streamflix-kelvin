import React, { useEffect, useState } from "react";
import { getMovieList } from "../services/APIGlobals";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Price, Purchase, rupiah } from "../services/Wallet";

const Hero = () => {
  const BASEIMAGEURL = "https://image.tmdb.org/t/p/original/";
  const [playingMovies, setPlayingMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPlayingMovies(result[0]);
    });
  }, []);
  const navigate = useNavigate();
  const price = Price(playingMovies.vote_average);

  return (
    <div className="h-screen text-white bg-black">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-5/6 md:mx-36">
        <img
          className="w-full h-3/4 md:h-3/4 object-cover object-top rounded-xl cursor-pointer"
          onClick={() =>
            navigate(
              `${playingMovies.id}/${playingMovies.title.replace(/ /g, "-")}`
            )
          }
          src={`${BASEIMAGEURL}${playingMovies.backdrop_path}`}
        />
        <div className="self-start mt-5 p-2">
          <h1
            onClick={() =>
              navigate(
                `${playingMovies.id}/${playingMovies.title.replace(/ /g, "-")}`
              )
            }
            className="text-white font-light text-2xl md:text-4xl"
          >
            {playingMovies.title}
          </h1>
          <div className="flex justify-between text-light text-sm py-1">
            <p>{playingMovies.release_date}</p>
            <div>⭐{Math.round(playingMovies.vote_average)}</div>
          </div>
          <div className="flex justify-between mt-3 items-center ">
            <button
              onClick={() => Purchase(price)}
              className="border rounded-full px-4 py-1 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              Purchase
            </button>
            <div>{rupiah(price)}</div>
          </div>
        </div>
        {/* <img className="w-3/4 h-3/4 object-none object-top" src="poster.jpg" /> */}
      </div>
    </div>
  );
};

export default Hero;
