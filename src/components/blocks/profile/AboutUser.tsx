import { BsBriefcase, BsFillChatSquareTextFill } from "react-icons/bs";
import { TbWorldOff } from "react-icons/tb";

const AboutUser = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-3xl font-semibold max-md:text-2xl ">About me</h2>
      <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-2">
        <div className="flex gap-2 items-center ">
          <div>
            <BsBriefcase />
          </div>
          <div className="">My work: Artist</div>
        </div>
        <div className="flex gap-2 items-center w-[50%] md:w-[40%]   ">
          <div>
            <BsFillChatSquareTextFill />
          </div>
          <div>Speaks English, Spanish</div>
        </div>
        <div className="flex gap-2 items-center w-[50%] md:-[40%] ">
          <div>
            <TbWorldOff />
          </div>
          <div>Lives in Mexico City, Mexico</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
