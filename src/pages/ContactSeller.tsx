import Login from "../components/blocks/MessageSeller/Login";
import PriceDetails from "../components/blocks/MessageSeller/PriceDetails";
import Title from "../components/blocks/MessageSeller/Title";
import Trip from "../components/blocks/MessageSeller/Trip";
import StickyPrice from "../components/blocks/MessageSeller/stickyprice";

const ContactSeller = () => {
  return (
    <div className="h-screen flex justify-center w-screen overflow-x-hidden">
      <div className="w-full md:w-[90%] h-fit flex justify-between">
        <div className="w-full flex flex-col md:bg-white  bg-slate-200 gap-3 md:gap-0 md:w-[50%]">
          <Title />
          <Trip />
          <PriceDetails />
          <Login />
        </div>
        <div className="w-[40%] hidden md:flex relative h-screen ">
          <div className="sticky top-40 w-full h-fit">
            <StickyPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSeller;
