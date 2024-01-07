import React from "react";
import SearchIcon from "../components/SearchIcon";
import Button from "../components/Button";
import NoticiationIcon from "../components/NoticiationIcon";
import ArrowDown from "../components/ArrowDown";
import FilmIcon from "../components/FilmIcon";
import StarIcon from "../components/StarIcon";
import CardView from "../components/CardView";
import { allData } from "../mockdata";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Movies() {
  return (
    <div className="flex flex-col w-full h-screen bg-backgrounddark ">
      <div className=" bg-backgrounddark  min-h-20 w-full flex flex-row justify-between px-14">
        <div className="flex flex-row items-center">
          <p className="text-grayscale-10 font-bold text-xl">CineMax</p>
          <ol className=" pl-40 flex flex-row items-center gap-9">
            <li className="text-grayscale-10 font-medium text-base">Movies</li>
            <li className="text-grayscale-10 font-medium text-base">Series</li>
            <li className="text-grayscale-10 font-medium text-base">
              Animation
            </li>
            <li className="text-grayscale-10 font-medium text-base">Genres</li>
          </ol>
        </div>

        <div className="flex flex-row items-center gap-9">
          <SearchIcon />
          <div className=" min-w-32">
            <Button variant="primary">Payment</Button>
          </div>
          <NoticiationIcon />
          <div className="flex flex-row gap-1 items-center">
            <img
              className="w-8 h-8 min-w-8 min-h-8 object-cover rounded-full border  border-grayscale-10"
              src="/user2.jpeg"
              alt="user"
            />
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-full">
        <div className="bg-darksmooth min-w-64 h-full">s</div>
        <div className="w-full h-full flex flex-col gap-16 pt-16">
          <div className="flex flex-col gap-6 w-full px-8">
            <h4 className=" text-grayscale-10 font-bold text-2xl">Top Rated</h4>
            <div className="flex flex-row gap-6 items-center">
              {allData.slice(0, 4).map((data) => (
                <CardView key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className="bg-green-500 w-full">a</div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
