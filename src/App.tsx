import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import { useRoutes } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Characters />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <>{routing}</>;
};

export default App;
