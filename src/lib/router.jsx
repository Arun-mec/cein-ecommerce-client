import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import ProductsPage from '../pages/products/ProductsPage'
import LoginPage from '../pages/auth/LoginPage'

export const router = createBrowserRouter([
    {
        path : "",
        element : <HomePage />
    },
    {
        path : "/login",
        element : <LoginPage />
    },
    {
        path : "/products",
        element : <ProductsPage />
    },
    {
        path : "/newarrivals",
        element : <ProductsPage />
    },
    {
        path : "/newarrivals",
        element : <ProductsPage />
    }
])