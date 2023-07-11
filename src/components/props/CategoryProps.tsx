import { Link } from "react-router-dom";

const CategoryProps = () => {
  return (
    <div>
      <Link to="/category">
        <p className="cursor-pointer text-sm bg text-black hover:text-globalTextColor-hover ">
          Furniture
        </p>
      </Link>
    </div>
  );
};

export default CategoryProps;
