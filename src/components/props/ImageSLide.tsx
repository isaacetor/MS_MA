import { useState, FC } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { imageData } from "../../types";

const ImageSLide: FC<imageData> = ({ authorCover, cover }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? cover.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cover.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      className="relative w-full h-[300px] rounded-2xl"
    >
      <div className="absolute cursor-pointer text-white shadow-md hover:text-purple-700 text-2xl top-3 right-3 transition-all ease-in duration-200">
        <AiTwotoneHeart />
      </div>
      <img
        className="w-full h-full rounded-2xl object-cover transition-all ease-in duration-500"
        src={cover[currentImageIndex]}
      />
      <div
        className={`w-full ${
          show ? "block" : "hidden"
        } h-7 absolute left-0 top-[45%]`}
      >
        <button
          onClick={goToPreviousSlide}
          className={`h-full shadow-sm shadow-[black] hover:scale-[1.08] transition-all absolute left-1 top-0 border-none outline-none focus:outline-none p-[5px] ml-3 bg-white ${
            currentImageIndex === 0 ? "hidden" : "flex"
          } justify-center items-center rounded-[50%]`}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={goToNextSlide}
          className="h-full shadow-sm shadow-[black] hover:scale-[1.08] transition-all border-none absolute right-1 top-0 outline-none focus:outline-none p-[5px] mr-3 bg-white flex justify-center items-center rounded-[50%]"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
      <div className="absolute w-10 h-10 bottom-3 left-3">
        <img className="w-full h-full object-cover" src={authorCover} />
      </div>
    </div>
  );
};

export default ImageSLide;