import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../screen/HomeScreen";
import { EconomicScreen } from "../screen/EconomicScreen";
import { PopulationScreen } from "../screen/PopulationScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "economic",
        element: <EconomicScreen />,
      },
      {
        index: true,
        path: "population",
        element: <PopulationScreen />,
      },
    ],
  },
]);
