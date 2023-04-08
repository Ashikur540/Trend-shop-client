import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import { Blogs } from "../Pages/Blogs/Blogs"
import { CategoryProducts } from "../Pages/Category products/CategoryProducts"
import { Contact } from "../Pages/Contact/Contact"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { ProductDetails } from "../Pages/Product details/ProductDetails"
import { Products } from "../Pages/Products/Products"
import Signup from "../Pages/signup/Signup"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/productDetails',
                element: <ProductDetails />,
            },
            {
                path: '/products/:category',

                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/category/${params.category}`),
                element: < CategoryProducts />,
            },

            {
                path: '/product/:id',
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`),
                element: <ProductDetails />
            },

        ],

    },
    {
        path: '/dashboard',
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            // {
            //     path: '',
            //     element: <Welcome />,

            // },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router