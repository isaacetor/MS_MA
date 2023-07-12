import { Outlet } from "react-router-dom";
import { Footer } from "..";

const MessageRequestLayout = () => {
  return (
    <div className="h-full overflow-x-hidden">
      {/* {show ? <Header /> : null} */}
      <Outlet />
      <Footer width="" />
    </div>
  );
};

export default MessageRequestLayout;
