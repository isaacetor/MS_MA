import { Categories, Footer, Header } from "..";
import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <div className="h-full">
      <Header width="[90%]" />
      <Categories />
      <Outlet />
      <Footer width="[90%]" sticky="fixed" />
    </div>
  );
};

export default Homelayout;
