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
    <div className="flex flex-col gap-1 w-full sm:w-[300px] mb-6 mt-7">
      {/*product picture */}

      <ImageSLide cover={cover} authorCover={authorCover} />

      {/* product Text */}

      <ProductFeaturedText
        authorName={authorName}
        place={place}
        rating={rating}
        amount={amount}
        date={date}
      />
    </div>
  );
};

export default ProductProps;
