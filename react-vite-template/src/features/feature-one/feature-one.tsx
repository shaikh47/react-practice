import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import { ThemeContext } from "../theme/context";

export const FeatureOne = () => {
  const dataFromRouteLoader = useLoaderData(); // preloaded by the route loader
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    if (!themeCtx) return;
    console.log("FeatureOne: theme changed ->", themeCtx.theme);
    console.log(
      "this is the loader data from the react-router: ",
      dataFromRouteLoader,
    );
  }, [themeCtx?.theme, dataFromRouteLoader]);

  return (
    <div>
      <h1>Feature One</h1>
      <p>This is the first feature of the app.</p>
      <p>
        Data from route loader:{" "}
        {dataFromRouteLoader?.message?.data?.description}
      </p>

      <p>Current theme: {themeCtx?.theme ?? "unknown"}</p>
      <button
        className="border border-cyan-500 px-2 py-0.5 mt-1 rounded text-cyan-500 cursor-pointer"
        onClick={() => themeCtx?.toggleTheme?.()}
      >
        Toggle theme
      </button>
    </div>
  );
};
