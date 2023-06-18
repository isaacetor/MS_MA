import { useState } from "react";
import "../../styles/style.css";
import { CategoryProps } from "..";

const Categories = () => {
  const [shadow, setShadow] = useState<boolean>(false);

  const scroll = () => {
    if (window.scrollY >= 10.5) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  window.addEventListener("scroll", scroll);

  return (
    <div
      id="hide-scrollbar"
      className={`${
        shadow ? "h-[80px]" : "h-[98px]"
      } w-full sticky top-[80px] bg-white ${
        shadow ? "shadow-sm" : null
      } transition-all ease-in-out duration-200`}
    >
      <div className="w-[90%] m-[auto] h-full flex gap-10 items-center overflow-y-hidden ">
        <CategoryProps />
        <CategoryProps />

        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
        <CategoryProps />
      </div>
    </div>
  );
};

export default Categories;
