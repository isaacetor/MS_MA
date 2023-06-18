import { ProductProps } from "../components";

const Home = () => {
  return (
    <div className="container">
      <div className="w-[90%] m-[auto] h-full mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-5 ">
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
        <ProductProps />
      </div>
    </div>
  );
};

export default Home;
