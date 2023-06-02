import AboutUser from "./AboutUser";
import UserReviews from "./UserReviews";

const UserPostBlock = () => {
  return (
    <div className="w-[70%] h-full  flex flex-col gap-5 max-lg:w-full ">
      {/* about user section */}
      <AboutUser />
      <hr />
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold max-md:text-2xl">
          What people are saying about Riley
        </h1>
        <UserReviews />
      </div>
      <div className="bg-red-400">jhdfjjh</div>
    </div>
  );
};

export default UserPostBlock;
