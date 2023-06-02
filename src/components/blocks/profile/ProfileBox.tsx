import avatar from "../../../assets/jpg/suit.jpeg";
import { AiOutlineCheck } from "react-icons/ai";

const ProfileBox = () => {
  return (
    <div className="w-full h-[250px]  border-[1px] bg-white rounded-3xl shadow-xl">
      <div className=" w-full h-full flex justify-center items-center flex-col">
        <div className=" w-[120px] h-[120px] rounded-[50%]  relative ">
          <img
            className="w-[100%] h-[100%] object-cover object-top rounded-full "
            src={avatar}
            alt=""
          />
          <div className="w-[40px] h-[40px] bg-purple-600 flex items-center justify-center rounded-[50%] absolute  right-0  bottom-0 text-white">
            <AiOutlineCheck />
          </div>
        </div>

        <div className=" font-bold text-[30px]">Isaac Etor</div>
        <p className=" font-semibold">New Host</p>
      </div>
    </div>
  );
};

export default ProfileBox;
