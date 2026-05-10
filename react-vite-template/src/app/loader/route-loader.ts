export const routeLoader = async () => {
  try {
    const response = await fetch("http://localhost:3000/weather");
    const json = await response.json();

    console.log("Route loader data:", json);

    return { message: json };
  } catch (error) {
    console.error("Error in route loader:", error);
    return { message: "Error fetching data" };
  }
};
