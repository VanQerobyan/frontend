import { useForm } from "react-hook-form"
import { addUser, type AddedUser} from "../users/userSlice"
import { useAppDispatch } from "../hooks"
import { AgeValidator, NameValidator, SalaryValidator, SurnameValidator } from "../../validator/validator";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";


export const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleAdd = (data: AddedUser) => {
        dispatch(addUser(data));
        navigate('/');
    }

    const {register, handleSubmit, formState:{errors}} = useForm<AddedUser>()

    return (
        <div className={styles.page}>
            <div className={styles.formCard}>

                <div className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>USER MANAGEMENT</p>
                        <h2 className={styles.title}>Add User</h2>
                        <p className={styles.subtitle}>
                            Create a new user and add them to your list.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(handleAdd)} className={styles.form}>

                    <div className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            {...register("name", NameValidator)}
                        />
                        {errors.name && (
                            <p className={styles.error}>{errors.name.message}</p>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="surname">Surname</label>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Enter surname"
                            {...register("surname", SurnameValidator)}
                        />
                        {errors.surname && (
                            <p className={styles.error}>{errors.surname.message}</p>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            placeholder="Enter age"
                            {...register("age", AgeValidator)}
                        />
                        {errors.age && (
                            <p className={styles.error}>{errors.age.message}</p>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="salary">Salary</label>
                        <input
                            id="salary"
                            type="number"
                            placeholder="Enter salary"
                            {...register("salary", SalaryValidator)}
                        />
                        {errors.salary && (
                            <p className={styles.error}>{errors.salary.message}</p>
                        )}
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Add User
                    </button>

                </form>
            </div>
        </div>
    )
}