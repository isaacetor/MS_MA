import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
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
]);
