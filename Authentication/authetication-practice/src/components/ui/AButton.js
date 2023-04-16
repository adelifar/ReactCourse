import styles from "./Button.module.css";
import {Link} from "react-router-dom";

const AButton=props=>{
    return <Link to={props.href} className={styles.button}>{props.children}</Link>;
}
export default AButton;