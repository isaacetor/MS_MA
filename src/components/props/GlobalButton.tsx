import { buttonData } from "../../types";
import { FC } from "react";

const GlobalButton: FC<buttonData> = ({ text }) => {
  return (
    <div>
      <div>
        <button className="py-[10px] px-[15px] border-[1px] border-gray-400  rounded-md font-bold hover:bg-gray-100 transition-all ease-in-out duration-200 max-md:text-sm">
          {text}
        </button>
      </div>
    </div>
  );
};

export default GlobalButton;
