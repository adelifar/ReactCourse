import { FC } from "react";
import styles from './TodoItem.module.css'
const TodoItem:FC<{text:string}>=(props)=>{
return <li className={styles.item}>{props.text}</li>
}

export default TodoItem;