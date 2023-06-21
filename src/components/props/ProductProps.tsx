import { Link } from "react-router-dom";
import { ImageSLide, ProductFeaturedText } from ".";
import { cardData } from "../../types";
import { FC } from "react";

const ProductProps: FC<cardData> = ({
  cover,
  authorCover,
  authorName,
  rating,
  amount,
  date,
  place,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-[335px] my-6 ">
      {/*product picture */}

      <ImageSLide cover={cover} authorCover={authorCover} />

      {/* product Text */}

      <Link to="products">
        <ProductFeaturedText
          authorName={authorName}
          place={place}
          rating={rating}
          amount={amount}
          date={date}
        />
      </Link>
    </div>
  );
};

export default ProductProps;
