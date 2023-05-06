import styles from './MainNavigation.module.css'
import {NavLink} from "react-router-dom";
import AButton from "../ui/AButton";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../ui/Button';

const MainNavigation = () => {
    const authCtx=useContext(AuthContext);
    function getLinkClass(param) {
        return param.isActive === true ? `${styles.link} ${styles.active}` : styles.link;
    }
    const logoutHandler=()=>{
        authCtx.logout();
        //redirect
    }

    return <header>
        <nav className={styles.navigation}>
            <h2 className={styles.logo}>React Authentication</h2>
            <div className={styles.menu}>

                {!authCtx.isLoggedIn && <NavLink className={(c) => getLinkClass(c)} to={"/auth"}>Login</NavLink>}
                {authCtx.isLoggedIn && <NavLink className={(c) => getLinkClass(c)} to={"/profile"}>Profile</NavLink>}
            
            {authCtx.isLoggedIn && <Button onClick={logoutHandler}  >Logout</Button>}
            </div>
        </nav>
    </header>
}
export default MainNavigation;