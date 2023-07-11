import { AiFillStar } from "react-icons/ai";

const Accounts = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-3">
      <div className="flex justify-between h-14">
        <div className="border-[1px] border-black rounded-lg flex justify-center items-center w-[30%] h-full"></div>
        <div className="border-[1px] border-black rounded-lg flex justify-center items-center w-[30%] h-full"></div>
        <div className="border-[1px] border-black rounded-lg flex justify-center items-center w-[30%] h-full"></div>
      </div>
      <div className="border-[1px] transition-all cursor-pointer hover:bg-slate-100 pl-5 border-black rounded-lg flex items-center gap-28 h-14">
        <AiFillStar />
        Continue with email
      </div>
    </div>
  );
};

export default Accounts;
