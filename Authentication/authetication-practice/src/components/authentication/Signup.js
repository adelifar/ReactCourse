import styles from "./Login.module.css";
import Button from "../ui/Button";

const Signup =()=>{
    return <>
        <h2>Create new Account</h2>
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
                <Button>Sign up</Button>
            </div>
        </form>
    </>
}
export default Signup;