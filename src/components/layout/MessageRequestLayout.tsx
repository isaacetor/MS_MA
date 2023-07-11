import { Outlet } from "react-router-dom";
import { Header } from "../static/MessageSellerStaticFiles";
import { useState } from "react";

const MessageRequestLayout = () => {
  const [show, setShow] = useState<boolean>(true);

  const scroll = () => {
    if (window.scrollY >= 5) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  window.addEventListener("scroll", scroll);

  return (
    <div className="h-full overflow-x-hidden">
      {show ? <Header /> : null}
      <Outlet />
    </div>
  );
};

export default MessageRequestLayout;
