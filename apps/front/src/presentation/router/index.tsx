import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../providers/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(
      () => import("@/presentation/providers/context/authContext")
    ),
    children: [
      {
        path: "/login",
        Component: lazy(() => import("@/presentation/pages/security/login")),
      },
      {
        path: "/recoverPassword/:id/:token",
        Component: lazy(
          () =>
            import("@/presentation/pages/recoveryPassword/recoveryPasswordPage")
        ),
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
          {
            path: "create/company",
            Component: lazy(
              () => import("@/presentation/pages/administration/company")
            ),
          },
          {
            path: "user",
            Component: lazy(
              () => import("@/presentation/pages/security/users")
            ),
          },
        ],
      },
    ],
  },
]);
