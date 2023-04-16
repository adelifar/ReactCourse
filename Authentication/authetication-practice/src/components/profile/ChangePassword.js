import Button from "../ui/Button";
import styles from './ChangePassword.module.css'

const ChangePassword = () => {
    return <form className={styles.container}>
        <label htmlFor="password">New Password</label>
        <input type="password" id="password"/>
        <div className={styles.action}><Button>Change Password</Button>
        </div>
    </form>
}
export default ChangePassword;
