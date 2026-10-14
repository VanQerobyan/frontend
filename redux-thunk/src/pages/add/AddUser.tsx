import { useForm } from "react-hook-form"
import { addedUser, type User } from "../users/userSlice"
import { useAppDispatch } from "../../app/hooks"
import { NavLink, useNavigate } from "react-router"
import styles from "./AddUser.module.css"

export const AddUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<User>({
    defaultValues: { gender: "male" }
  })

  const handleAdd = async (data: User) => {
    clearErrors("root.server")

    try {
      await dispatch(addedUser(data)).unwrap()
      navigate("/users")
    } catch (err) {
      console.error("Added user error:", err)

      setError("root.server", {
        message: "Could not add the user. Please try again."
      })
    }
  }

  return (
    <section className={styles.page}>
      <NavLink to="/users" className={styles.backLink}>
        ← Back to users
      </NavLink>

      <header className={styles.header}>
        <span className={styles.tag}>NEW PROFILE</span>
        <h1>Add a user</h1>
        <p>A new face in your workspace. Start with the basics.</p>
      </header>

      <form
        className={styles.card}
        onSubmit={handleSubmit(handleAdd)}
      >
        <div className={styles.cardHeader}>
          <h2>Profile details</h2>
          <p>All fields are required.</p>
        </div>

        {errors.root?.server && (
          <p className={styles.alert} role="alert">
            {errors.root.server.message}
          </p>
        )}

        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="id">User ID</label>

            <input
              id="id"
              type="number"
              placeholder="e.g. 11"
              aria-invalid={!!errors.id}
              aria-describedby={errors.id ? "id-error" : undefined}
              {...register("id", {
                valueAsNumber: true,
                required: "Enter a user ID."
              })}
            />

            {errors.id && (
              <p id="id-error" className={styles.error}>
                {errors.id.message}
              </p>
            )}
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
              placeholder="e.g. Aram"
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
              placeholder="e.g. Sargsyan"
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

            {isSubmitting ? "Adding…" : "Add user"}
          </button>
        </footer>
      </form>
    </section>
  )
}