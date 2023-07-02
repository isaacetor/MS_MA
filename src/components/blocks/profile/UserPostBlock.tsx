import { ProductProps } from "../..";
import GlobalButton from "../../props/GlobalButton";
import AboutUser from "./AboutUser";
import UserReviews from "./UserReviews";
import img1 from "../../../assets/jpg/Menstylica.jpeg";

import img2 from "../../../assets/jpg/suit.jpeg";
import img3 from "../../../assets/jpg/SHOES.jpeg";
import img4 from "../../../assets/jpg/INSTASHOP.jpeg";
import profile from "../../../assets/jpg/profile.jpeg";

const UserPostBlock = () => {
  const dummyImage = [img1, img3, img4, img2];

  return (
    <div className="w-[70%] h-full  flex flex-col gap-5 max-lg:w-full ">
      {/* about user section */}
      <AboutUser />
      <hr />
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold max-md:text-2xl">
          What people are saying about Isaac Etor
        </h1>
        {/* user reviews */}
        <div className="w-full grid grid-cols-2 gap-5 max-md:grid-cols-1 py-2">
          <UserReviews />
          <UserReviews />
          <UserReviews />
        </div>

        {/* show more reviews button */}
        <GlobalButton text="Show Review" />
        <hr />
      </div>

      {/* user posts */}
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold max-md:text-2xl capitalize">
          Isaac Etor listings
        </h1>
        {/* user posts */}
        <ProductProps
          cover={dummyImage}
          authorCover={profile}
          authorName="Eloy"
          place="Sao Paulo, Brazil"
          rating={4.84}
          amount={33}
          date="Jul 29 - Aug 3"
        />
      </div>
    </div>
  );
};

export default UserPostBlock;
