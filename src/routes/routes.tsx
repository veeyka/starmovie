import {Suspense, lazy} from 'react';
import {createBrowserRouter} from "react-router-dom";


const Home = lazy(()=>import("../pages/home/Home"));
const ContactUs = lazy(()=>import("../pages/faq/ContactUs"));
const AboutUs = lazy(()=>import("../pages/faq/AboutUs"));
const Favorite = lazy(()=>import("../pages/favorite/favorite"));
const Login = lazy(()=>import("../pages/auth/login"));
const Signup = lazy(()=>import("../pages/auth/signp"));
const ResetPassword = lazy(()=>import("../pages/auth/resetPassword"));


export const Routes = createBrowserRouter([
    {path: "/", element: <Suspense fallback={<></>}><Home /></Suspense>,},
    {path: "/contactus", element:<Suspense fallback={<></>}><ContactUs /></Suspense> },
    {path: "/aboutus/:id", element:<Suspense fallback={<></>}><AboutUs /></Suspense> },
    {path: "/favorite", element:<Suspense fallback={<></>}><Favorite /></Suspense> },
    {path: "/login", element:<Suspense fallback={<></>}><Login /></Suspense> },
    {path: "/signup", element:<Suspense fallback={<></>}><Signup /></Suspense> },
    {path: "/resetpassword", element:<Suspense fallback={<></>}><ResetPassword /></Suspense> },
  ]);