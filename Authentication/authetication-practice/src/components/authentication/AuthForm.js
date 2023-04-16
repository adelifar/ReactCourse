import {useState} from "react";
import Card from "../ui/Card";
import styles from "./AuthForm.module.css";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm=()=>{
    const [isLogin, setLogin] = useState(true);
    const loginToggleHandler = (e) => {
        e.preventDefault();
        setLogin(isLogin => !isLogin);
    }
    return <Card className={styles.container}>
        {isLogin && <Login/>}
        {!isLogin && <Signup/>}
        <div className={styles.link}>
            {isLogin && <a href='#' onClick={loginToggleHandler}>Create new account</a>}
            {!isLogin && <a href='#' onClick={loginToggleHandler}> Login with existing account</a>}
        </div>
    </Card>
}
export  default AuthForm;