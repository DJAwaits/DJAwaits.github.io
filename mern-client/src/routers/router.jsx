import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Home from '../home/Home';
import Test from '../test/Test';
import Blog from '../comp/Blog';
import About from '../comp/About';


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
          path: '/test',
          element: <Test/>

        },{
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