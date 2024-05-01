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
        }
        
      ]
    },
  ]);

  export default router;