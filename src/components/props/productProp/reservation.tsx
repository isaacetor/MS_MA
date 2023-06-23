import { AiFillStar } from "react-icons/ai";

const Reservation = () => {
  return (
    <div className="w-full h-[fit-content] p-6 rounded-lg border-[1px] shadow-md shadow-slate-200 border-slate-300 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="font-[600] text-lg">
          $104 <span className="text-base font-thin"> night</span>
        </div>
        <div className="flex items-center gap-1 font-[600]">
          <AiFillStar /> 4.85 .{" "}
          <span className="font-thin text-sm text-slate-800">292 reviews</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="w-full h-12 font-[500] rounded-lg bg-purple-700 text-white border-none focus:outline-none">
          Reserve
        </button>
        <div className="text-center text-slate-800">
          You won't be charged yet
        </div>
      </div>
      <div className="py-5 border-t-[1px] font-[600] border-t-slate-200 flex justify-between ">
        <div>Total before taxes</div>
        <div>$607</div>
      </div>
    </div>
  );
};

export default Reservation;
