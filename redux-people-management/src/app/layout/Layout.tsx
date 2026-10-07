import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>User Management</div>

        <div className={styles.links}>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={'/add'}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            Add User
          </NavLink>
        </div>
      </nav>

      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  );
};