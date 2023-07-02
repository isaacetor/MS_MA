import UserBlock from "../components/blocks/profile/UserBlock";
import UserPostBlock from "../components/blocks/profile/UserPostBlock";

const Profile = () => {
  return (
    <div>
      <div className="w-[90%] m-auto py-8 my-4 flex gap-14 max-lg:block max-md:pt-1">
        {/* profile */}
        <UserBlock />

        {/* user ppst details */}
        <UserPostBlock />
      </div>
    </div>
  );
};

export default Profile;
