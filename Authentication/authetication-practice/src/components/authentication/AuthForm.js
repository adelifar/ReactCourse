import { useContext, useState } from "react";
import Card from "../ui/Card";
import styles from "./AuthForm.module.css";
import Login from "./Login";
import Signup from "./Signup";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const authCtx=useContext(AuthContext);
  const navigate=useNavigate();
  const loginToggleHandler = (e) => {
    e.preventDefault();
    setLogin((isLogin) => !isLogin);
  };
  const submitHandler = (data) => {
    setLoading(true);
    let url = "http://localhost:3002/login";
    if (isLogin) {
      url = "http://localhost:3002/login";
    } else {
      url = "http://localhost:3002/register";
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        return res.json();
      }
        else{
          //error
          return res.json().then(data=>{
            throw new Error(data.message)
          })
        }

        
    }).then(data=>{
      console.log(data);
      authCtx.login(data.token);
      navigate('/')
    }).catch(er=>alert(er.message));
  };

  return (
    <Card className={styles.container}>
      {isLogin && <Login onSubmit={submitHandler} loading={isLoading} />}
      {!isLogin && <Signup onSubmit={submitHandler} loading={isLoading} />}
      <div className={styles.link}>
        {isLogin && (
          <a href="#" onClick={loginToggleHandler}>
            Create new account
          </a>
        )}
        {!isLogin && (
          <a href="#" onClick={loginToggleHandler}>
            {" "}
            Login with existing account
          </a>
        )}
      </div>
    </Card>
  );
};
export default AuthForm;
