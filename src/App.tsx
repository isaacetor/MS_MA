import { RouterProvider } from "react-router-dom";
import { elements } from "./routes/Homeroute";

const App = () => {
  return (
    <div>
      <RouterProvider router={elements} />
    </div>
  );
};

export default App;
