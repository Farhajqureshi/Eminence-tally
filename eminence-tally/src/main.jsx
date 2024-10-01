import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./Layout.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Course from "./pages/Course.jsx";
import Galleries from "./pages/Galleries.jsx";
import ContectPage from "./pages/ContectPage.jsx";
import TeachersPage from "./pages/TeachersPage.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Course/>}/>
      <Route path="gallery" element={<Galleries/>}/>
      <Route path="contact" element={<ContectPage/>}/>
      <Route path="teachers" element={<TeachersPage/>}/>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
