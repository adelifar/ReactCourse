import { useRef } from "react";
import Button from "../ui/Button";
import styles from './ChangePassword.module.css'

const ChangePassword = (props) => {
    const newPasswordInputRef=useRef();
    const submitHandler=e=>{
        e.preventDefault();
        const enteredPassword=newPasswordInputRef.current.value;
        //add validation
        props.onSubmit(enteredPassword);
    }
    return <form className={styles.container} onSubmit={submitHandler}>
        <label htmlFor="password">New Password</label>
        <input type="password" minLength={3} id="password" ref={newPasswordInputRef}/>
        <div className={styles.action}><Button>Change Password</Button>
        </div>
    </form>
}
export default ChangePassword;
