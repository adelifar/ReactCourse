import styles from "./Login.module.css";
import Button from "../ui/Button";
import { useRef } from "react";

const Signup =(props)=>{
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const submitHandler=e=>{
        e.preventDefault();
        const email=emailInputRef.current.value;
        const password=passwordInputRef.current.value;
        props.onSubmit({email,password});
    }
    return <>
        <h2>Create new Account</h2>
        
        <form onSubmit={submitHandler}>
            <div className={styles.group}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required ref={emailInputRef}/>
            </div>
            <div className={styles.group}>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" required ref={passwordInputRef}/>
            </div>
            <div>
              {!props.loading &&  <Button>Sign up</Button>}
            </div>
        </form>
    </>
}
export default Signup;