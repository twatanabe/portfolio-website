import React from "react"
import * as ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"
import HomePage from "./page/HomePage"
import siteData from "siteData"
import "./styles/root.css"

const router = createHashRouter(
  [
    {
      path: "/",
      Component: (props) => <HomePage {...siteData} {...props} />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)
