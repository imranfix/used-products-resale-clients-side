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
                    element: <CategoryId></CategoryId>,
                    // loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
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
                    element: <AddProducts></AddProducts>
                },

                {
                    path: '/dashboard/paymentSystem/:id',
                    element: <AdminRoute>
                        <PaymentSystem>

                        </PaymentSystem>
                    </AdminRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
                }
            ]
        }

        
])


export default router;