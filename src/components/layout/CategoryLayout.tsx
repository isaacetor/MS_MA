import { Outlet } from "react-router-dom";
import { Categories, Footer, Header } from "..";

const CategoryLayout = () => {
  return (
    <div className="h-full">
      <Header width="[90%]" />
      <Categories />
      <Outlet />
      <Footer width="[90%]" sticky="fixed" />
    </div>
  );
};

export default CategoryLayout;
