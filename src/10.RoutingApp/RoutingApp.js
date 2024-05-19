import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./Routing.module.css";
import MensPage from "./pages/Mens/MensPage";
import TShirtComponent from "./components/MenComponent/TShirtComponent";
import TiesComponent from "./components/MenComponent/TiesComponent";
import PrivateRooute from "./PrivateRoute/PrivateRoute";
import React, { Suspense } from "react";

const HomePageLazy = React.lazy(() => import("./pages/HomePage"));

// TREAT THIS COMPONENT AS App.js ONLY
function RoutingApp() {
  return (
    <>
      {/* NAv */}

      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/"}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/mentor"}
            >
              MENTOR
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/men"}
              end
            >
              MEN PAGE
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* conditionally we are rendring pages */}

      {/* Register Routes */}

      <Suspense fallback={<h1>Loading......</h1>}>
        <Routes>
          {/* 1. BASICS of Routing */}
          <Route path="/" element={<HomePageLazy />}></Route>
          <Route
            path="/mentor"
            element={
              <PrivateRooute>
                <MentorPage />
              </PrivateRooute>
            }
          ></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
          {/* 2. Complex ROuting  */}
          <Route path="/men" element={<MensPage />}>
            <Route path="t-shirt" element={<TShirtComponent />} />
            <Route path="ties" element={<TiesComponent />} />
          </Route>
          z
        </Routes>
      </Suspense>
    </>
  );
}

export default RoutingApp;

/*
    1. to show activated tab 
     className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}

    



*/
