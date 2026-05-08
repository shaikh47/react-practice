import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoute from "./routes/landing";
import NotFoundRoute from "./routes/not-found";
import AppRoot from "./routes/app/root";
import { FeatureTwo } from "@/features/feature-two/feature-two";
import { FeatureOne } from "@/features/feature-one/feature-one";
import LoggingMiddleware from "./middleware/route-logging-middleware";
import { routeLoader } from "./loader/route-loader";

const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      Component: LandingRoute,
    },
    {
      path: "app",
      Component: AppRoot,
      middleware: [LoggingMiddleware], // middleware applied to all child routes and cascades top down
      children: [
        {
          index: true,
          element: <div>App Home</div>,
        },
        {
          path: "feature-one",
          loader: routeLoader, // this loader will run before rendering the FeatureOne component and its data will be available via useLoaderData in the component. this will be available only here and its children
          children: [
            {
              index: true,
              Component: FeatureOne,
            },
            {
              path: "details",
              Component: () => <div>Feature One Details</div>,
            },
            {
              path: "list",
              Component: () => <div>Feature One List</div>,
            },
          ],
        },
        {
          path: "feature-two",
          Component: FeatureTwo,
        },
      ],
    },
    {
      path: "*",
      Component: NotFoundRoute,
    },
  ]);
};

export const AppRouter = () => {
  return <RouterProvider router={createAppRouter()} />;
};
