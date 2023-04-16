import styles from './MainNavigation.module.css'
import {NavLink} from "react-router-dom";
import AButton from "../ui/AButton";

const MainNavigation = () => {
    function getLinkClass(param) {
        return param.isActive === true ? `${styles.link} ${styles.active}` : styles.link;
    }

    return <header>
        <nav className={styles.navigation}>
            <h2 className={styles.logo}>React Authentication</h2>
            <div className={styles.menu}>

                <NavLink className={(c) => getLinkClass(c)} to={"/auth"}>Login</NavLink>
                <NavLink className={(c) => getLinkClass(c)} to={"/profile"}>Profile</NavLink>
                <AButton href={'/logout'}>Logout</AButton>
            </div>
        </nav>
    </header>
}
export default MainNavigation;