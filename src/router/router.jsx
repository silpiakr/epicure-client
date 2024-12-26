import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import GalleryPage from "../pages/GalleryPage/GalleryPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'signUp',
            element: <SignUp></SignUp>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'galleryPage',
          element: <GalleryPage></GalleryPage>
        }
      ]
    },
  ]);

export default router;