import { useRef } from "react";
import Button from "../ui/Button";
import styles from './Login.module.css';

const Login = (props) => {
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const submitHandler=e=>{
        e.preventDefault();
        const email=emailInputRef.current.value;
        const password=passwordInputRef.current.value;
        props.onSubmit({email,password});
    }
    return <>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <div className={styles.group}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" ref={emailInputRef} required/>
            </div>
            <div className={styles.group}>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" ref={passwordInputRef} required/>
            </div>
            <div>
               {!props.loading && <Button>Login</Button>}
            </div>
        </form>
    </>

}
export default Login;
