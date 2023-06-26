import { SimpleItem } from ".";
import { AiFillStar } from "react-icons/ai";

const Offers = () => {
  return (
    <div className="border-b-[1px] flex flex-col gap-5 border-b-slate-300 py-9">
      <div className="text-2xl font-[600]">What this place offers</div>
      <div className="flex flex-col gap-4">
        <SimpleItem icon={<AiFillStar />} text="Garder view" />
        <SimpleItem icon={<AiFillStar />} text="Resort view" />
        <SimpleItem icon={<AiFillStar />} text="Beach access" />
        <SimpleItem icon={<AiFillStar />} text="Kitchen" />
        <SimpleItem icon={<AiFillStar />} text="Wifi - 28 Mbps" />
        <SimpleItem
          icon={<AiFillStar />}
          text="Carbon monoxide alarm"
          slashed
        />
        <SimpleItem icon={<AiFillStar />} text="Smoke alarm" slashed />
      </div>
      <button className="border-black mt-4 font-[600] w-full py-3 rounded-md border-[1px]">
        Show all 38 amenities
      </button>
    </div>
  );
};

export default Offers;
