import { useContext } from "react";
import ChangePassword from "./ChangePassword";
import styles from './ProfileForm.module.css';
import AuthContext from "../../store/auth-context";
const ProfileForm=()=>{
    const authCtx=useContext(AuthContext);
    const submitHandler=enteredPassword=>{
        if(!authCtx.isLoggedIn)return;
        fetch('http://localhost:3002/changePassword',{
            method:'POST',
            body:JSON.stringify( {password:enteredPassword,token:authCtx.token}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.ok)alert('password changed successfully');
            else alert('can not change password');
        })
    }
    return<div >
        <h1 className={styles.heading}>Your User profile</h1>
        <ChangePassword onSubmit={submitHandler}/>
    </div>;
}
export default ProfileForm;