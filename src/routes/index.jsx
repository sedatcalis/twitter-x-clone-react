import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Notifications from "~/pages/notifications";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element:<Home/>

            },
            {
                path:'explore',
                element: <Explore/>
            },
            {
                path:'notifications',
                element: <Notifications/>
            },
            {
                path: '*',
                element: <NotFound/>
        
            },
        ]

    }
  
])

export default routes