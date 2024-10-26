import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../providers/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("@/presentation/pages/home/HomePage")),
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        path: "pokemon",
        Component: lazy(
          () => import("@/presentation/pages/pokemon/PokemonPage")
        ),
      },
      {
        path: "todo",
        Component: lazy(() => import("@/presentation/pages/todo/TodoPage")),
      },
    ],
  },
]);
