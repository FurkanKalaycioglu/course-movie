import React from "react";
import FilmIcon from "./FilmIcon";
import StarIcon from "./StarIcon";

export interface CardViewProps {
  data: {
    rank: number;
    title: string;
    description: string;
    image: string;
    big_image: string;
    genre: string[];
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    imdbid: string;
    imdb_link: string;
  };
}

function CardView({ data }: CardViewProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <img className="w-28 h-36 rounded-2xl" src={data.image} alt="poster" />
      <div className="flex flex-col gap-3 items-start">
        <div className=" px-2 py-1 border border-linedark rounded-lg">
          <p className=" text-xs font-medium text-grayscale-40">{data.year}</p>
        </div>
        <p className="text-grayscale-10 text-base font-bold max-w-36 w-36 min-w-36 text-nowrap overflow-hidden truncate">
          {data.title}
        </p>
        <div className="flex flex-row gap-1 items-center">
          <FilmIcon />
          {data.genre.map((genre) => (
            <p className="text-grayscale-70 text-xs font-medium">{genre}</p>
          ))}
        </div>
        <div className="flex flex-row items-center gap-1">
          <StarIcon />
          <p className="text-base text-grayscale-10 font-semibold">
            {data.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardView;
