import React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCheckSquare,
  faCode,
  faCog,
  faDesktop,
  faGem,
  faLink,
  faLock,
  faSave,
  faUpload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import HomePage from "./page/HomePage"
import siteData from "siteData"
import "./styles/root.css"

library.add(
  fab,
  faCheckSquare,
  faCog,
  faCode,
  faDesktop,
  faGem,
  faLink,
  faLock,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
  faSave,
  faUpload,
  faDownload
)

const router = createBrowserRouter(
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
