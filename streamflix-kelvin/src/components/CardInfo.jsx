import React from "react";
import { useNavigate } from "react-router-dom";
import { Price } from "../services/Price";

const CardInfo = ({
  id,
  poster_path,
  title,
  release_date,
  genre,
  vote_average,
}) => {
  const BASEIMAGEURL = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  const price = Price(vote_average);

  return (
    <div className="m-10 max-w-60 ">
      <img
        className="h-96 brightness-80 cursor-pointer"
        onClick={() => navigate(`${id}/${title.replace(/ /g, "-")}`)}
        src={`${BASEIMAGEURL}${poster_path}`}
      />
      <div className="font-light text-sm mt-4 h-28 flex flex-col justify-between">
        <h1 className="font-normal text-xl ">{title}</h1>
        <div className="flex justify-between">
          <div className="flex">
            <p>{release_date}</p>.<p>{genre}</p>
          </div>
          <div>⭐{Math.round(vote_average)}</div>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <button className="border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition ease-in-out duration-300">
            Purchase
          </button>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
