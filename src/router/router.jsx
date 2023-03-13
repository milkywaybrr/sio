import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RequestPage from "../pages/RequestPage";
import Root from "../pages/Root";
import SinglePage from "../pages/SinglePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true,
            },
            {
                path: '/services/:id',
                element: <SinglePage />
            },
            {
                path: '/request',
                element: <RequestPage />
            }
        ]
    }
]);

export default router;