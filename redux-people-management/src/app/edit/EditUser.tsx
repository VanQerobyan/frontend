import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editUser, selectUser, type AddedUser } from "../users/userSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AgeValidator, NameValidator, SalaryValidator, SurnameValidator } from "../../validator/validator";
import styles from "./EditUser.module.css";

export const EditUser = () => {

    const { id } = useParams();
    const users = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = users.find(user => user.id === Number(id));
    const { register, handleSubmit, formState:{errors}, reset} = useForm<AddedUser>()

    useEffect(() => {
        reset(user);
    }, [])

    const handleEdit = (data: AddedUser) => {
        const updatedUser = {id: Number(id), ...data};
        dispatch(editUser(updatedUser));
        navigate('/')
    }
    
    return (
        <div className={styles.page}>
            <div className={styles.formCard}>

                <div className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>USER MANAGEMENT</p>
                        <h2 className={styles.title}>Edit User</h2>
                        <p className={styles.subtitle}>
                            Update the information of this user.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(handleEdit)} className={styles.form}> 

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
                        <label htmlFor="Salary">Salary</label>
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
                        Update User
                    </button>

                </form>
            </div>
        </div>
    )
}