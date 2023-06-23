import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import Image from "../components/props/productProp/Image";
import TitleArea from "../components/props/productProp/TitleArea";
import Ad from "../components/props/productProp/Ad";
import EntireHosting from "../components/props/productProp/EntireHosting";
import { Offers, Reservation, Reviews } from "../components";

const singleProduct = () => {
  const dummyImage = [img1, img3, img4, img2];

  return (
    <div className="w-full flex-col flex items-center pt-3">
      <div className="flex overflow-x-scroll no-scrollbar">
        {dummyImage.map((el: any) => (
          <img
            src={el}
            className="w-full h-[300px] md:hidden object-top bg-black"
          />
        ))}
      </div>
      <div className="w-11/12 pt-5 md:w-5/6">
        <TitleArea
          name="LUXURIOUS HOME WITH PRIVATE OCEANFRONT POOL"
          rating="4.86"
          reviews="112"
          place="Ngaparou,Thies,Senegal"
        />
        <Image />
        <div className="w-full relative h-[fit-content] mt-4 flex gap-6">
          <div className="flex flex-col">
            <Ad />
            <EntireHosting
              host="BeCordial"
              guests={7}
              bedrooms={3}
              beds={6}
              baths={2}
            />
            <Offers />
          </div>
          <div className="flex-1 hidden h-[fit-content] mt-8 sticky top-24 md:flex">
            <Reservation />
          </div>
        </div>
        <div className="py-20">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default singleProduct;
