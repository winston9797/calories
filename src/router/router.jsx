import { createBrowserRouter } from "react-router-dom";
import Search from '../components/Search'
import MainLayout from "../Layouts/MainLayout";
import SingleFood from "../components/SingleFood";
import Recipes from "../components/Recipes";
import SingleRecipe from "../components/SingleRecipe";
import About from "../components/About";

const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    children:[
        {
            path:'/search',
            element:<Search />
        },
        {
            path:'/food/:id',
            element:<SingleFood />
        },
        {
            path:'/recipes',
            element:<Recipes />
        },
        {
            path:'/recipe/:id',
            element:<SingleRecipe />
        },
        {
            path:'/about',
            element:<About />
        }
    ]
}])

export default router