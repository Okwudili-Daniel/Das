import React from "react"
import Layout from "../component/layouts/Layout"
import { createBrowserRouter } from "react-router-dom"
import HomeScreen from "../component/common/HomeScreen"
import Login from "../Page/Login"
import SignUp from "../Page/SignUp"
import DashBoardLayout from "../Dashboard/DashBoardLayout"
import UserHome from "../DashBoardPages/UserHome"

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                    index:true,
                    element: <HomeScreen/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/sign-in",
        element: <SignUp/>
    },
    {
        path: "/userDashBoard",
        element: <DashBoardLayout/>,
        children:[
            {
                index:true,
                element: <UserHome/>
            }
        ]
    }
])
