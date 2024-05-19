import { NavLink, Outlet } from "react-router-dom";
import styles from "./../../Routing.module.css";

function MensPage() {
  return (
    <>
      <h1>Mens Wadrobe</h1>

      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/men/t-shirt"}
            >
              T SHIRT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/men/ties"}
            >
              Ties
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <h1>list...</h1> */}

      {/* IT WILL SHOW THE CHILD ROUTING COMPONENT ACCORDINGLY */}
      {/* https://reactrouter.com/en/main/components/outlet */}
      <Outlet></Outlet>
    </>
  );
}

export default MensPage;
