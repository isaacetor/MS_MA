import { AiFillStar } from "react-icons/ai";
import { textData } from "../../types";
import { FC } from "react";

const ProductFeaturedText: FC<textData> = ({
  authorName,
  place,
  rating,
  amount,
  date,
}) => {
  return (
    <div className="font-[600] text-slate-800 text-base mt-[14px]">
      <div className="flex cursor-pointer justify-between items-center">
        <div>{place}</div>
        <div className="flex items-center gap-1">
          <AiFillStar /> {rating}
        </div>
      </div>
      <div className="cursor-pointer font-[500] capitalize">
        Posted by: {authorName} <br /> {date}
      </div>
      <div className="gap-2">
        ${amount}
        <span className="cursor-pointer text-lg font-[500]">night</span>
      </div>
    </div>
  );
};

export default ProductFeaturedText;
