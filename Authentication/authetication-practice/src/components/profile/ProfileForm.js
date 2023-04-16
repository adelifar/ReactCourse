import ChangePassword from "./ChangePassword";
import styles from './ProfileForm.module.css';
const ProfileForm=()=>{
    return<div >
        <h1 className={styles.heading}>Your User profile</h1>
        <ChangePassword/>
    </div>;
}
export default ProfileForm;