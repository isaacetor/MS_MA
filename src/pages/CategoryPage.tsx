import CatName from "../components/props/categoryProps/CatName";
import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import profile from "../assets/jpg/profile.jpeg";
import { ProductProps } from "../components";

const CategoryPage = () => {
  const dummyImage = [img1, img3, img4, img2, img1, img3, img4, img2];

  return (
    <div className="w-[90%] m-auto">
      <CatName />
      <div className=" grid gap-6 place-items-center grid-cols-4  max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
        {dummyImage.map(() => (
          <ProductProps
            cover={dummyImage}
            authorCover={profile}
            authorName="Eloy"
            place="Sao Paulo, Brazil"
            rating={4.84}
            amount={33}
            date="Jul 29 - Aug 3"
            route="/products"
            userRoute="/user"
            wishlistFunc={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
