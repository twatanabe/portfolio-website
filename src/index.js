import React from "react"
import * as ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Home from "./page/Home"
import siteData from "siteData"
import { ThemeProvider } from "utils/theme"
import "./styles/root.css"

const router = createHashRouter(
  [
    {
      path: "/",
      Component: (props) => <Home {...siteData} {...props} />,
    },
  ],
  {
    basename: "/",
  }
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
