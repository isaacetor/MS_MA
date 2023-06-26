import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { DropdownProps, SearchProps } from "..";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HeaderData } from "../../types";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC<HeaderData> = ({ width }) => {
  const [showAuthNav, setAuthNav] = useState<boolean>(false);

  const showAuth = () => {
    setAuthNav(!showAuthNav);
  };

  return (
    <header className="h-[80px] bg-white w-full border-b-[1px] sticky top-0 z-40">
      <div
        className={`h-full m-[auto] w-${width} flex justify-between items-center bg-white z-index-20`}>
        {/* logo */}
        <Link to="/">
          <div className="text-globalTextColor text-xl font-medium">MSMA</div>
        </Link>

        {/* search */}
        <SearchProps placeholder="Serch for an item" icons={<BiSearch />} />
        {/* auth */}
        <div
          className="p-3 rounded-full border flex items-center justify-center gap-3 cursor-pointer"
          onClick={showAuth}>
          <div className="text-2xl">
            <IoIosMenu />
          </div>
          <div className="text-2xl">
            <FaUserCircle />
          </div>
        </div>

        {/* dropdown */}
        {showAuthNav ? (
          <div className="absolute right-20 top-24 z-50">
            <DropdownProps />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
