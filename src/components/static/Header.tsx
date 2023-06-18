import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { DropdownProps } from "..";

const Header = () => {
  return (
    <header className="h-[80px] bg-white w-full border-b-[1px] sticky top-0 ">
      <div className="h-full m-[auto] w-[90%] flex justify-between items-center bg-white z-index-20">
        {/* logo */}
        <div className="text-globalTextColor text-xl font-medium">MSMA</div>

        {/* search */}
        <div className="w-[340px] h-[60%] py-2 px-2 bg-white bg-opacity-10 backdrop-filter shadow-md backdrop-blur-lg border border-gray-100 rounded-full flex items-center justify-between overflow-hidden gap-5">
          <div className="w-[90%] h-full  flex items-center ">
            <input
              type="search"
              placeholder="Serch for an item"
              className="flex-1 h-full outline-none text-sm"
            />
          </div>
          <div className="w-[10%] h-full bg-globalColor rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-globalColor-hover transition-all duration-100 ease-in">
            <p className="font-extrabold text-xl">
              <BiSearch />
            </p>
          </div>
        </div>

        {/* auth */}
        <div className="p-3 rounded-full border flex items-center justify-center gap-3 cursor-pointer">
          <div className="text-2xl">
            <IoIosMenu />
          </div>
          <div className="text-2xl">
            <FaUserCircle />
          </div>
        </div>

        {/* dropdown */}
        <div className="absolute right-10 top-20 z-[9999]">
          {/* <DropdownProps /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
