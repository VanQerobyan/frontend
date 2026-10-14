import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deletedUser, getAllUsers, userSelect } from "./userSlice"
import styles from "./Users.module.css"

export const Users = () => {
  const users = useAppSelector(userSelect)
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [requestError, setRequestError] = useState("")
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    let active = true

    dispatch(getAllUsers())
      .unwrap()
      .catch(() => {
        if (active) {
          setRequestError("Could not load users. Please try again.")
        }
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
    }
  }, [dispatch])

  const handleDelete = async (id: number) => {
    setRequestError("")
    setDeletingId(id)

    try {
      await dispatch(deletedUser(id)).unwrap()
    } catch (err) {
      console.error("Delete user error:", err)
      setRequestError("Could not delete the user. Please try again.")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>PEOPLE DIRECTORY</p>

          <h1>
            Users <span className={styles.count}>{users.length}</span>
          </h1>

          <p className={styles.description}>
            Your people, their details, all in one place.
          </p>
        </div>

        <NavLink to="/add" className={styles.addButton}>
          <span aria-hidden="true">+</span> Add user
        </NavLink>
      </header>

      {requestError && (
        <p className={styles.alert} role="alert">
          {requestError}
        </p>
      )}

      <div className={styles.card}>
        <div className={styles.tableScroll}>
          <table className={styles.table} aria-label="Users">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Gender</th>
                <th scope="col" className={styles.actionsHeading}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    <span className={styles.spinner} />
                    <p role="status">Loading users…</p>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    <strong>
                      {requestError ? "Unable to load users" : "No users yet"}
                    </strong>

                    <p>
                      {requestError
                        ? "Check the connection and reload this page."
                        : "Add your first user to get started."}
                    </p>

                    {!requestError && (
                      <NavLink to="/add" className={styles.emptyLink}>
                        Add a user →
                      </NavLink>
                    )}
                  </td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id} className={styles.row}>
                    <td className={styles.id}>#{user.id}</td>

                    <td>
                      <div className={styles.profile}>
                        <span
                          className={`${styles.avatar} ${
                            user.gender === "female"
                              ? styles.avatarPurple
                              : ""
                          }`}
                          aria-hidden="true"
                        >
                          {user.name.charAt(0)}
                          {user.surname.charAt(0)}
                        </span>

                        <span className={styles.name}>{user.name}</span>
                      </div>
                    </td>

                    <td>{user.surname}</td>

                    <td>
                      <span
                        className={`${styles.gender} ${
                          user.gender === "female"
                            ? styles.female
                            : styles.male
                        }`}
                      >
                        {user.gender}
                      </span>
                    </td>

                    <td>
                      <div className={styles.actions}>
                        <NavLink
                          to={`/edit/${user.id}`}
                          className={styles.editButton}
                          aria-label={`Edit ${user.name} ${user.surname}`}
                        >
                          Edit
                        </NavLink>

                        <button
                          className={styles.deleteButton}
                          type="button"
                          disabled={deletingId !== null}
                          onClick={() => handleDelete(user.id)}
                          aria-label={`Delete ${user.name} ${user.surname}`}
                        >
                          {deletingId === user.id ? "Deleting…" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!isLoading && (
          <div className={styles.tableFooter}>
            {users.length} {users.length === 1 ? "profile" : "profiles"} in
            your workspace
          </div>
        )}
      </div>
    </section>
  )
}