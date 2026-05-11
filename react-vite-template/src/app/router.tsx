import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoute from "./routes/landing";
import NotFoundRoute from "./routes/not-found";
import AppRoot from "./routes/app/root";
import LoggingMiddleware from "./middleware/route-logging-middleware";
import { routeLoader } from "./loader/route-loader";
import { paths } from "@/config/paths";
import { ProtectedRoute } from "@/lib/auth";
import React from "react";

const FeatureOne = React.lazy(() =>
  import("@/features/feature-one/feature-one").then((module) => ({
    default: module.FeatureOne,
  })),
);

const FeatureTwo = React.lazy(() =>
  import("@/features/feature-two/feature-two").then((module) => ({
    default: module.FeatureTwo,
  })),
);

const RegisterRoute = React.lazy(() =>
  import("./routes/auth/register").then((module) => ({
    default: module.default,
  })),
);

const LoginRoute = React.lazy(() =>
  import("./routes/auth/login").then((module) => ({
    default: module.default,
  })),
);

const ProtectedAppRoot = () => (
  // component composition
  <ProtectedRoute>
    <AppRoot />
  </ProtectedRoute>
);

const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      Component: LandingRoute,
    },
    {
      path: paths.auth.register.path,
      Component: RegisterRoute,
    },
    {
      path: paths.auth.login.path,
      Component: LoginRoute,
    },
    {
      path: "app",
      Component: ProtectedAppRoot,
      middleware: [LoggingMiddleware], // middleware applied to all child routes and cascades top down
      children: [
        {
          index: true,
          element: <div>App Home</div>,
        },
        {
          path: "feature-one",
          children: [
            {
              index: true,
              loader: routeLoader, // this loader will run before rendering the FeatureOne component and its data will be available via useLoaderData in the component
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
