import React from "react";
import { useNavigate } from "react-router-dom";
import { Price, Purchase, rupiah } from "../services/Wallet";

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
    <div className="m-2 md:m-10 w-28 md:w-auto md:max-w-60 ">
      <img
        className="h-60 md:h-96 brightness-80 hover:brightness-95 cursor-pointer"
        onClick={() => navigate(`${id}/${title.replace(/ /g, "-")}`)}
        src={`${BASEIMAGEURL}${poster_path}`}
      />
      <div className="font-light text-xs md:text-sm mt-4 md:h-28 flex flex-col justify-between">
        <h1 className="font-normal md:text-xl ">{title}</h1>
        <div className="flex justify-between">
          <div className="flex">
            <p>{release_date}</p>.<p>{genre}</p>
          </div>
          <div>⭐{Math.round(vote_average)}</div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:mt-3 md:items-center">
          <button
            onClick={() => Purchase(price)}
            className="border border-black rounded-full px-1 md:px-4 py-1 hover:bg-black hover:text-white transition ease-in-out duration-300"
          >
            Purchase
          </button>
          <div>{rupiah(price)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
