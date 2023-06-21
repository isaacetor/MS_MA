import { searchData } from "../../types";
import { FC } from "react";

const SearchProps: FC<searchData> = ({ placeholder, icons }) => {
  return (
    <div className="w-[340px] h-[60%] py-2 px-2 bg-white bg-opacity-10 backdrop-filter shadow-md backdrop-blur-lg border border-gray-100 rounded-full flex items-center justify-between overflow-hidden gap-5">
      <div className="w-[90%] h-full  flex items-center ">
        <input
          type="search"
          placeholder={placeholder}
          className="flex-1 h-full outline-none text-sm"
        />
      </div>
      <div className="w-[10%] h-full bg-globalColor rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-globalColor-hover transition-all duration-100 ease-in">
        <p className="font-extrabold text-xl">{icons}</p>
      </div>
    </div>
  );
};

export default SearchProps;
