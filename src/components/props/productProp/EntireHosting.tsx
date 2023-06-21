import { iEntire } from "../../../types";

import img1 from "../../../assets/jpg/suit.jpeg";
import { FC } from "react";

const EntireHosting: FC<iEntire> = ({
  host,
  guests,
  bedrooms,
  beds,
  baths,
}) => {
  return (
    <div className="border-b-[1px] border-b-slate-300 py-7 flex justify-between">
      <div className="w-[80%] text-2xl font-[500]">
        <div>
          Entire home <br /> hosted by {host}
        </div>
        <div className="text-[17px] font-normal mt-1">
          {guests} guests . {bedrooms} bedrooms . {beds} beds . {baths} baths
        </div>
      </div>
      <div className="w-12 h-12 rounded-[50%]">
        <img className="w-full h-full rounded-[50%]" src={img1} />
      </div>
    </div>
  );
};

export default EntireHosting;
