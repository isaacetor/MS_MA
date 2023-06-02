import UserBlock from "../components/blocks/profile/UserBlock";
import UserPostBlock from "../components/blocks/profile/UserPostBlock";

const Profile = () => {
  return (
    <div>
      <div className="w-[90%] m-auto h-[200vh] my-4 flex gap-14 max-lg:block">
        {/* profile */}
        <UserBlock />

        {/* user ppst details */}
        <UserPostBlock />
      </div>
    </div>
  );
};

export default Profile;
