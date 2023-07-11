import { AiFillStar } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import dom from "../../../assets/jpg/Menstylica.jpeg";

const Title = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex bg-white flex-col gap-[40px] p-6">
      <div className="w-full flex items-center gap-36 md:gap-4 text-base md:text-xl font-[600]">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          <MdOutlineArrowBackIosNew />
        </div>
        <div className="md:text-2xl">Request to purchase</div>
      </div>
      <div className="h-[100px] md:hidden flex gap-4 items-start">
        <div className="h-full w-[130px] rounded-md">
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
            {" (5)"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
