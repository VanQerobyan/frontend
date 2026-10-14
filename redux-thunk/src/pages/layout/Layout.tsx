import { NavLink, Outlet, useLocation } from "react-router"
import styles from "./Layout.module.css"

export const Layout = () => {
  const { pathname } = useLocation()

  const pageName =
    pathname === "/" ? "Overview"
    : pathname === "/add" ? "Add user"
    : pathname.startsWith("/edit/") ? "Edit user"
    : "Users"

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <NavLink
          to="/"
          className={styles.brand}
          aria-label="UserSpace home"
        >
          <span className={styles.brandMark}>U</span>

          <span>
            UserSpace
            <span className={styles.brandCaption}>
              People, organized.
            </span>
          </span>
        </NavLink>

        <p className={styles.menuLabel}>WORKSPACE</p>

        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" end className={navClass}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m3 10 9-7 9 7v10H3Z M9 20v-7h6v7" />
            </svg>
            Home
          </NavLink>

          <NavLink to="/users" className={navClass}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 20v-2a6 6 0 0 1 12 0v2 M16 5a3 3 0 0 1 0 6 M21 20v-2a6 6 0 0 0-4-5" />
            </svg>
            Users
          </NavLink>

          <NavLink to="/add" className={navClass}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 20v-2a6 6 0 0 1 12 0v2 M19 8v6 M16 11h6" />
            </svg>
            Add user
          </NavLink>
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.footerDot} />
          A place for your people.
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.breadcrumb}>
              Workspace / {pageName}
            </p>
            <p className={styles.topbarTitle}>{pageName}</p>
          </div>

          <span className={styles.workspaceBadge}>
            User management
          </span>
        </header>

        {pathname === "/" && (
          <section className={styles.welcome}>
            <span className={styles.welcomeTag}>
              A LITTLE MORE ORGANIZED
            </span>

            <h1>
              Your people.
              <br />
              <span>One place.</span>
            </h1>

            <p>
              Keep profiles organized. Add someone new, update their
              details, or find the people already on your list.
            </p>

            <div className={styles.welcomeActions}>
              <NavLink to="/users" className={styles.primaryLink}>
                View users <span aria-hidden="true">↗</span>
              </NavLink>

              <NavLink to="/add" className={styles.secondaryLink}>
                Add a user
              </NavLink>
            </div>
          </section>
        )}

        <Outlet />
      </main>
    </div>
  )
}