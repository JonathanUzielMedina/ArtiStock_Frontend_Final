import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import ModifyProductPage from "../pages/ModifyProductPage";
import ModifyUserPage from "../pages/ModifyUserPage";
import AddProductPage from "../pages/AddProductPage";
import OneProduct from "../pages/OneProduct";
import GraphPage from "../pages/GraphPage";
import UserProfilePage from "../pages/UserProfilePage";
import WelcomePage from "../pages/WelcomePage";
import ArtistsPage from "../pages/ArtistsPage";
import ProductByAuthor from "../pages/ProductByAuthor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <WelcomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/users",
                element: <ProductPage />,
                errorElement: <ErrorPage />,
            },
            {
                path:"/user/:id",
                element: <UserProfilePage />,
                errorElement: <ErrorPage/>
            },
            {
                path: "/modify-user/:id",
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
            {
                path:"/artists",
                element:<ArtistsPage />,
                errorElement: <ErrorPage />
            },
            {
                path:"/artists/productByAuthor/:userId",
                element: <ProductByAuthor />,
                errorElement: <ErrorPage/>
            },
        ],
        errorElement: <ErrorPage />
    },
]);

export default router;
