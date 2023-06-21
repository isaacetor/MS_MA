import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";

const SingleProductLayout = () => {
  return (
    <div className="h-full">
      <Header width="[90%]" />
      <Outlet />
      <Footer width="[90%]" sticky="" />
    </div>
  );
};

export default SingleProductLayout;
