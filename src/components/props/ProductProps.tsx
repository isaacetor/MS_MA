import { ProductFeaturedImage, ProductFeaturedText } from ".";

const ProductProps = () => {
  return (
    <div className="w-[330px] h-[400px] overflow-hidden bg-black max-w-lg:w-[45%] max-w-sm:w-[100%] grid grid-rows-2">
      {/*product picture */}
      <ProductFeaturedImage />

      {/* product Text */}
      <ProductFeaturedText />
    </div>
  );
};

export default ProductProps;
