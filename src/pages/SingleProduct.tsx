import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import Image from "../components/props/productProp/Image";
import TitleArea from "../components/props/productProp/TitleArea";
import Ad from "../components/props/productProp/Ad";
import EntireHosting from "../components/props/productProp/EntireHosting";

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
      <div className="w-11/12 md:w-5/6">
        <Image />
        <div className="w-full mt-4 flex flex-col">
          <TitleArea
            name="LUXURIOUS HOME WITH PRIVATE OCEANFRONT POOL"
            rating="4.86"
            reviews="112"
            place="Ngaparou,Thies,Senegal"
          />
          <Ad />
          <EntireHosting
            host="BeCordial"
            guests={7}
            bedrooms={3}
            beds={6}
            baths={2}
          />
        </div>
      </div>
    </div>
  );
};

export default singleProduct;
