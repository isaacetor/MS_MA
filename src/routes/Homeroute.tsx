import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SingleProductlayout } from "../components";
import { SingleProduct } from "../pages";
import Profile from "../pages/Profile";
import CategoryLayout from "../components/layout/CategoryLayout";
import CategoryPage from "../pages/CategoryPage";
import MessageRequestLayout from "../components/layout/MessageRequestLayout";
import ContactSeller from "../pages/ContactSeller";
// Lazy load the components and pages
// const LazyHomeLayout = lazy(() => import('../components/Homelayout'));
const Home = lazy(() => import("../pages/Home"));
const Homelayout = lazy(() => import("../components/layout/Homelayout"));

export const elements = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Homelayout />
      </Suspense>
    ),
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <SingleProductlayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  {
    path: "/products",
    element: <SingleProductlayout />,
    children: [
      {
        index: true,
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/seller",
    element: <MessageRequestLayout />,
    children: [
      {
        index: true,
        element: <ContactSeller />,
      },
    ],
  },
  {
    path: "/category",
    element: <CategoryLayout />,
    children: [
      {
        index: true,
        element: <CategoryPage />,
      },
    ],
  },
]);
