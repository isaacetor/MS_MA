import { ProductFeaturedImage, ProductFeaturedText } from ".";

const ProductProps = () => {
  return (
    <div className=" h-[400px] overflow-hidden bg-black text-gray-400">
      {/*product picture */}
      <div className="col-span-2 row-span-2 bg-orange-300">
        <ProductFeaturedImage />
      </div>

      {/* product Text */}
      <div className="col-span-2 row-span-1 bg-green-400">
        <ProductFeaturedText />
      </div>
    </div>
  );
};

export default ProductProps;
