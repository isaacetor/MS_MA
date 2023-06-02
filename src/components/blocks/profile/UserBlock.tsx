import ConfirmedDetailsBlock from "./ConfirmedDetailsBlock";
import ProfileBox from "./ProfileBox";

const UserBlock = () => {
  return (
    <div className="w-[30%] h-[80vh] sticky top-10 flex flex-col gap-6  items-center max-lg:my-6 max-lg:w-full max-lg:static ">
      {/* profile avatar */}
      <ProfileBox />

      {/* confirmed details block */}
      <ConfirmedDetailsBlock />
    </div>
  );
};

export default UserBlock;
