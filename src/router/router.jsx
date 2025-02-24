import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Foods from "../pages/AllFoods/Foods";
import FoodDetails from "../pages/AllFoods/FoodDetails";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import MyFoods from "../pages/MyFoods/MyFoods";
import AddFood from "../pages/AddFood/AddFood";
import MyOrders from "../pages/MyOrders/MyOrders";
import Gallery from "../pages/GalleryPage/Gallery";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: 'gallery',
          element: <Gallery></Gallery>
        },

        {
          path: 'foods',
          element: <Foods></Foods>,
          loader: () => fetch(`https://epicure-server.vercel.app/foods`)
        },
        {
          path: 'foodDetails/:id',
          element: <FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`https://epicure-server.vercel.app/foods/${params.id}`)
        },
        {
          path: 'purchase/:id',
          element:  <FoodPurchase></FoodPurchase>,
          loader: ({ params }) => fetch(`https://epicure-server.vercel.app/purchases/${params.id}`), 
        },
        {
          path: 'myFoods',
          element: <MyFoods></MyFoods>,
          loader: () => fetch('https://epicure-server.vercel.app/foods')
        },
        {
          path: 'addFood',
          element: <AddFood></AddFood>,
        },
        {
          path: 'myOrders',
          element: <MyOrders></MyOrders>,
          loader: () => fetch('https://epicure-server.vercel.app/foods')
        },
        {
          path: 'update/:id',
          element: <UpdateFood></UpdateFood>,
          loader: async ({ params }) =>
            fetch(`https://epicure-server.vercel.app/foods/${params.id}`)
        }
      ]
    },
  ]);

export default router;