import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate, useParams } from "react-router"
import {
  editedUser,
  getAllUsers,
  userSelect,
  type User
} from "../users/userSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./EditUser.module.css"

export const EditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const users = useAppSelector(userSelect)

  const user = users.find(
    candidate => Number(candidate.id) === Number(id)
  )

  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<User>()

  useEffect(() => {
    let active = true

    dispatch(getAllUsers())
      .unwrap()
      .catch(() => {
        if (active) setLoadError(true)
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
    }
  }, [dispatch])

  useEffect(() => {
    if (user) reset(user)
  }, [user, reset])

  const handleEdit = async (data: User) => {
    if (!user) return

    clearErrors("root.server")

    try {
      await dispatch(
        editedUser({ id: Number(user.id), data })
      ).unwrap()

      navigate("/users")
    } catch (err) {
      console.error("Edit user error:", err)

      setError("root.server", {
        message: "Could not save the changes. Please try again."
      })
    }
  }

  if (isLoading) {
    return (
      <section className={styles.state} role="status">
        <span className={styles.loadingSpinner} />
        Loading profile…
      </section>
    )
  }

  if (loadError || !user) {
    return (
      <section className={styles.state}>
        <h1>
          {loadError ? "Could not load the profile" : "User not found"}
        </h1>

        <NavLink to="/users" className={styles.backLink}>
          ← Back to users
        </NavLink>
      </section>
    )
  }

  return (
    <section className={styles.page}>
      <NavLink to="/users" className={styles.backLink}>
        ← Back to users
      </NavLink>

      <header className={styles.header}>
        <span className={styles.tag}>EDIT PROFILE</span>
        <h1>Edit user</h1>
        <p>
          Update {user.name}'s details and keep everything up to date.
        </p>
      </header>

      <form
        className={styles.card}
        onSubmit={handleSubmit(handleEdit)}
      >
        <div className={styles.cardHeader}>
          <h2>Profile details</h2>
          <p>The user ID stays the same.</p>
        </div>

        {errors.root?.server && (
          <p className={styles.alert} role="alert">
            {errors.root.server.message}
          </p>
        )}

        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="id">
              User ID
              <span className={styles.readOnly}>Read only</span>
            </label>

            <input
              id="id"
              type="number"
              readOnly
              {...register("id", { valueAsNumber: true })}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="gender">Gender</label>

            <select id="gender" {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="name">First name</label>

            <input
              id="name"
              type="text"
              autoComplete="given-name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name", {
                required: "Enter a first name."
              })}
            />

            {errors.name && (
              <p id="name-error" className={styles.error}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="surname">Last name</label>

            <input
              id="surname"
              type="text"
              autoComplete="family-name"
              aria-invalid={!!errors.surname}
              aria-describedby={
                errors.surname ? "surname-error" : undefined
              }
              {...register("surname", {
                required: "Enter a last name."
              })}
            />

            {errors.surname && (
              <p id="surname-error" className={styles.error}>
                {errors.surname.message}
              </p>
            )}
          </div>
        </div>

        <footer className={styles.actions}>
          <NavLink to="/users" className={styles.cancelButton}>
            Cancel
          </NavLink>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className={styles.spinner} aria-hidden="true" />
            )}

            {isSubmitting ? "Saving…" : "Save changes"}
          </button>
        </footer>
      </form>
    </section>
  )
}