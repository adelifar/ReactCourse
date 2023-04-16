import { useState } from "react";
import Card from "../ui/Card";
import styles from "./AuthForm.module.css";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
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
        if (isLogin) {
          console.log("user logged in");
        } else {
          console.log("user created");
        }
      } else {
        //error
        res.json().then((data) => {
          alert(data.message);
        });
      }
    });
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
