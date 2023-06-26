import { FC } from "react";
import { HeaderData } from "../../types";

const Footer: FC<HeaderData> = ({ width, sticky }) => {
  return (
    <footer
      className={`w-full h-[50px] ${sticky} bottom-0 z-10 border-t-[1px] bg-white flex items-center`}>
      <div className={`w-${width} m-[auto] text-sm`}>
        <p>© {new Date().getFullYear()} MSMA</p>
      </div>
    </footer>
  );
};

export default Footer;
