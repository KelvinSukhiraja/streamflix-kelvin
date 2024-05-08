import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import getMovieList from "../services/APIGlobals";

const Card = () => {
  const [playingMovies, setPlayingMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPlayingMovies(result);
      console.log(result);
    });
  }, []);
  return (
    <>
      <h1 className="pt-10 px-20 font-light text-3xl">Now Playing</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {playingMovies.map((movie, i) => {
          return <CardInfo key={i} {...movie} />;
        })}
      </div>
    </>
  );
};

export default Card;
