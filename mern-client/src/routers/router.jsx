import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Home from '../home/Home';
import AllBooks from '../AllBooks/AllBooks';
import Blog from '../comp/Blog';
import About from '../comp/About';
import AllAnimanga from "../AllAnimanga/AllAnimanga";
import AllMovies from "../AllMovies/AllMovies";
import SingleBook from "../AllBooks/SingleBook";
import SingleMovie from "../AllMovies/SingleMovie";
import SingleAnimanga from "../AllAnimanga/SingleAnimanga";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import UploadMovie from "../dashboard/UploadMovie";
import UploadAnimanga from "../dashboard/UploadAnimanga";
import ManageBook from "../dashboard/ManageBook";
import ManageMovie from "../dashboard/ManageMovie";
import ManageAnimanga from "../dashboard/ManageAnimanga";
import EditBook from "../dashboard/EditBook";
import EditMovie from "../dashboard/EditMovie";
import EditAnimanga from "../dashboard/EditAnimanga";
import SignUp from "../comp/SignUp";
import Login from "../comp/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../comp/Logout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/AllBooks',
          element: <AllBooks/>

        },
        {
          path: '/AllMovies',
          element: <AllMovies/>
        },
        {
          path: '/AllAnimanga',
          element: <AllAnimanga/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },{
          path: '/about',
          element: <About/>
        },{
          path: '/book/:id',
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },{
          path: '/movie/:id',
          element: <SingleMovie/>,
          loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
        },{
          path: '/animanga/:id',
          element: <SingleAnimanga/>,
          loader: ({params}) => fetch(`http://localhost:5000/animanga/${params.id}`)
        }
        
      ]
    },,{
      path: '/admin/dashboard/',
      element: <DashboardLayout/>,
      children: [
        {
          path: '/admin/dashboard/',
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },{
          path: '/admin/dashboard/UploadBook',
          element: <UploadBook/>
        },{
          path: '/admin/dashboard/UploadMovie',
          element: <UploadMovie/>
        },{
          path: '/admin/dashboard/UploadAnimanga',
          element: <UploadAnimanga/>
        },{
          path: '/admin/dashboard/manageBook',
          element: <ManageBook/>
        },{
          path: '/admin/dashboard/manageMovie',
          element: <ManageMovie/>
        },{
          path: '/admin/dashboard/manageAnimanga',
          element: <ManageAnimanga/>
        },{
          path: '/admin/dashboard/editBook:id',
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },{
          path: '/admin/dashboard/editMovie:id',
          element: <EditMovie/>,
          loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
        },{
          path: '/admin/dashboard/editAnimanga:id',
          element: <EditAnimanga/>,
          loader: ({params}) => fetch(`http://localhost:5000/animanga/${params.id}`)
        }

      ]
    }
    ,{
      path: '/sign-up',
      element: <SignUp/>
    },{
      path: '/login',
      element: <Login/>
    },{
      path: '/logout',
      element: <Logout/>
    }
  ]);

  export default router;