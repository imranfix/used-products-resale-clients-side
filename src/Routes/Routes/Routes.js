import { createBrowserRouter } from "react-router-dom";
import LayoutDashboard from "../../Layout/LayoutDashboard";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyers from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import PaymentSystem from "../../Pages/Dashboard/PaymentSystem/PaymentSystem";
import CategoryId from "../../Pages/Home/Category/CategoryId";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import UiError from "../../Pages/Shared/UiError/UiError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([

        {
            path: '/',
            element: <Main></Main>,
            errorElement: <UiError></UiError>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/products',
                    element: <PrivateRoute><CategoryId></CategoryId></PrivateRoute>,
                    // loader: ({params}) => fetch(`https://second-hand-books-server.vercel.app/products/${params.id}`)
                }
            ]
        },

        {
            path: '/dashboard',
            element: <PrivateRoute><LayoutDashboard></LayoutDashboard></PrivateRoute>,
            errorElement: <UiError></UiError>,
            children: [
                {
                    path: '/dashboard/buyer',
                    element: <MyOrder></MyOrder>
                },
                {
                    path: '/dashboard/alluser',
                    element: <AdminRoute><AllUser></AllUser></AdminRoute>
                },

                {
                    path: '/dashboard/allseller',
                    element: <AdminRoute>
                         <AllSeller></AllSeller>
                    </AdminRoute>
                },
                {
                    path: '/dashboard/addProducts',
                    element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
                },

                {
                    path: '/dashboard/paymentSystem/:id',
                    element:  <PaymentSystem></PaymentSystem>,
                    loader: ({params}) => fetch(`https://second-hand-books-server.vercel.app/bookings/${params.id}`)
                }
            ]
        },

        {
            path: '*',
            element: <div className="text-center mt-12"> <h1><span className="text-5xl text-green-600">Sorry!!</span> This route is not Found <br />
                <span className="text-5xl">404</span>
            </h1></div>
        }


        
])


export default router;