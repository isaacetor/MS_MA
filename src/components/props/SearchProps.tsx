import { searchData } from "../../types";
import { FC } from "react";

const SearchProps: FC<searchData> = ({ placeholder, icons }) => {
  return (
    <div className="sm:w-[340px] h-[60%] py-2 px-2 bg-white bg-opacity-10 backdrop-filter shadow-md backdrop-blur-lg border border-gray-100 rounded-full flex items-center justify-between overflow-hidden gap-5">
      <div className="w-[90%] h-full  flex items-center ">
        <input
          type="search"
          placeholder={placeholder}
          className="flex-1 pl-3 h-full outline-none text-sm"
        />
      </div>
      <div className="p-2 bg-globalColor rounded-[50%] flex items-center justify-center text-white cursor-pointer hover:bg-globalColor-hover transition-all duration-100 ease-in">
        <div className="font-extrabold text-xl">{icons}</div>
      </div>
    </div>
  );
};

export default SearchProps;
