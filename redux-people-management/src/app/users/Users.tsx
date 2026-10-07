import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import styles from "./User.module.css";
import { deleteUser, selectUser } from "./userSlice";

export const Users = () => {
 
  const navigate = useNavigate();
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Users {users.length}</h2>

      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>

                <td className={styles.actions}>
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>

                  <button  onClick={() => navigate(`/edit/${user.id}`)}
                  className={styles.editButton}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
