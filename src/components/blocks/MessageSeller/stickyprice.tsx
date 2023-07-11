import { AiFillStar } from "react-icons/ai";
import dom from "../../../assets/jpg/Menstylica.jpeg";

const StickyPrice = () => {
  return (
    <div className="p-6 flex flex-col gap-5 border-[1px] border-slate-300 rounded-lg">
      <div className="h-[100px] flex gap-4 items-start">
        <div className="h-full w-[110px] rounded-md">
          <img className="w-full h-full object-top rounded-md" src={dom} />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <div className="text-xs text-slate-500">
              Room in bed and breakfast
            </div>
            <div className="text-sm text-slate-700">
              🈂 Dar Alya "Sappho Room" heated pool
            </div>
          </div>
          <div className="text-xs flex gap-1">
            <span className="flex items-center gap-1  font-[600]">
              <AiFillStar /> 5.00
            </span>{" "}
            {" (5 reviews)"}
          </div>
        </div>
      </div>
      <div className="py-5 border-y-[1px] border-slate-300 ">
        <div className="text-xl font-[600]">Price details</div>
        <div className="flex mt-5 flex-col gap-2">
          <div className="flex font-light justify-between">
            <div>$119.81 x 5 nights</div>
            <div>$599.05</div>
          </div>
          <div className="flex font-light justify-between">
            <div className="underline">MSMA service fee</div>
            <div>$84.57</div>
          </div>
        </div>
      </div>
      <div className="flex font-[600] justify-between">
        <div>
          Total <span className="underline">(NGN)</span>
        </div>
        <div>$683.62</div>
      </div>
    </div>
  );
};

export default StickyPrice;
