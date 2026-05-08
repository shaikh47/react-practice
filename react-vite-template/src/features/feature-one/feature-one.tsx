import { useLoaderData } from "react-router";

export const FeatureOne = () => {
  const dataFromRouteLoader = useLoaderData(); // here we are getting the data from the API which was preloaded by the route loader before rendering this component.

  return (
    <div>
      <h1>Feature One</h1>
      <p>This is the first feature of the app.</p>
      <p>
        Data from route loader:{" "}
        {dataFromRouteLoader?.message?.data?.description}
      </p>
    </div>
  );
};
