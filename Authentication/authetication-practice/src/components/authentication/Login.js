import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from './Login.module.css';
import {Link} from "react-router-dom";

const Login = () => {
    return <>
        <h2>Login</h2>
        <form>
            <div className={styles.group}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email"/>
            </div>
            <div className={styles.group}>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password"/>
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </form>
    </>

}
export default Login;
