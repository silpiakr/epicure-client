import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import Foods from "../pages/AllFoods/Foods";
import FoodDetails from "../pages/AllFoods/FoodDetails";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import MyFoods from "../pages/MyFoods/MyFoods";

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
        },
        {
          path: 'foods',
          element: <Foods></Foods>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: 'foodDetails/:id',
          element: <FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
          path: 'purchase/:id',
          element:  <FoodPurchase></FoodPurchase>,
          loader: ({ params }) => fetch(`http://localhost:5000/purchases/${params.id}`), 
        },
        {
          path: 'myFoods',
          element: <MyFoods></MyFoods>,
          // loader: () => fetch('http://localhost:5000/foods')
        }
      ]
    },
  ]);

export default router;