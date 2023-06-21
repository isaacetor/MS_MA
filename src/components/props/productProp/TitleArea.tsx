import { AiFillStar } from "react-icons/ai";
import { iHead } from "../../../types";
import { FC } from "react";

const TitleArea: FC<iHead> = ({ name, rating, reviews, place }) => {
  return (
    <div className="w-full mb-6">
      <div className="text-[26px] font-[500] leading-none flex gap-2">
        🈂 {name}
      </div>
      <div className="mt-4 md:mt-2 flex items-center gap-1 font-[450] text-[15px]">
        <AiFillStar /> {rating} .{" "}
        <span className="underline">{reviews} reviews</span> .{" "}
        <span className="underline"> {place} </span>
      </div>
    </div>
  );
};

export default TitleArea;
