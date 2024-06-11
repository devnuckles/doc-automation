import { createBrowserRouter } from "react-router-dom";
import Home from "../../platform/home/components/home";
import Templates from "../../platform/templates/components/templates";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/templates",
        element: <Templates />,
    },
]);
