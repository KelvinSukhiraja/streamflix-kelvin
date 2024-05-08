import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SlugId } from "../services/Slug";
import { Price } from "../services/Wallet";
import { Purchase, rupiah } from "../services/Wallet";

const Movie = () => {
  const movieId = SlugId();
  const BASEURL = "https://api.themoviedb.org/3";
  const APIKEY = "2e65b9283fb2bea5e3b2cf4ec2d1b5df";
  const BASEIMAGEURL = "https://image.tmdb.org/t/p/original/";

  const [movieDetail, setMovieDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASEURL}/movie/${movieId}?api_key=${APIKEY}`)
      .then((result) => {
        setMovieDetail(result.data);
      });
  }, []);
  const price = Price(movieDetail.vote_average);
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASEURL}/movie/${movieId}/credits?api_key=${APIKEY}`)
      .then((result) => {
        setMovieCast(result.data.cast);
      });
  }, []);

  const [movieRec, setMovieRec] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASEURL}/movie/${movieId}/recommendations?api_key=${APIKEY}`)
      .then((result) => {
        setMovieRec(result.data.results);
      });
  }, []);

  return (
    <div className="bg-black text-white ">
      <Navbar />
      <div className="md:px-20 p-4 md:pt-10 flex flex-col md:flex-row">
        <img
          className="h-[480px]"
          src={`${BASEIMAGEURL}${movieDetail.poster_path}`}
        />
        <div className="px-5 flex flex-col gap-3">
          <h1 className="text-3xl md:text-6xl">{movieDetail.title}</h1>
          <h3 className="font-light text-sm md:text-base md:w-3/4">
            {movieDetail.overview}
          </h3>
          <div className="flex gap-5 font-light text-md">
            <h2>⭐{Math.round(movieDetail.vote_average)}</h2>|
            <h2>{Math.round(movieDetail.runtime)} min</h2>
          </div>
          <div className="flex justify-between mt-3 md:w-1/3 items-center">
            <button
              onClick={() => Purchase(price)}
              className="border rounded-full px-4 py-1 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              Purchase
            </button>
            <div>{rupiah(price)}</div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden p-4 md:p-20 flex flex-col gap-8">
        <h2 className="text-xl md:text-3xl">Cast</h2>
        <div className="flex gap-8 overflow-x-auto">
          {movieCast.map((cast, i) => {
            if (i < 6) {
              return (
                <div key={i} className="flex flex-col min-w-44 gap-3">
                  <img
                    className="h-72 object-cover"
                    src={`${BASEIMAGEURL}${cast.profile_path}`}
                  />
                  <h2 className="text-sm font-medium">{cast.name}</h2>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="overflow-hidden p-4 md:px-20 pb-20 flex flex-col gap-8">
        <h2 className="text-xl md:text-3xl">Recommendations</h2>
        <div className="flex gap-8 overflow-x-auto">
          {movieRec.map((rec, i) => {
            if (i < 6) {
              return (
                <div key={i} className="flex flex-col min-w-44 max-w-52 gap-3">
                  <img
                    className="h-72 object-cover"
                    src={`${BASEIMAGEURL}${rec.poster_path}`}
                  />
                  <h2 className="text-sm font-medium">{rec.title}</h2>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
