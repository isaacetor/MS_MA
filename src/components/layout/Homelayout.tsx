import { Categories, Footer, Header } from "..";
import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <div className="h-full">
      <Header />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayout;
