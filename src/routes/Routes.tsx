import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import ModifyProductPage from "../pages/ModifyProductPage";
import ModifyUserPage from "../pages/ModifyUserPage";
import AddProductPage from "../pages/AddProductPage";
import OneProduct from "../pages/OneProduct";
import GraphPage from "../pages/GraphPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/users",
                element: <ProductPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/users/:id",
                element: <ModifyUserPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/products",
                element: <ProductPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/modify-product/:id",
                element: <ModifyProductPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/add-product",
                element: <AddProductPage />,
                errorElement: <ErrorPage />,
            },
            {
                path:"/product/:id",
                element: <OneProduct />,
                errorElement: <ErrorPage/>
            },
            {
                path:"/graph",
                element: <GraphPage />,
                errorElement: <ErrorPage/>
            },
        ],
        errorElement: <ErrorPage />
    },
]);

export default router;
