import Todo from "@/models/todo";
import React from "react";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'
const Todos:React.FC<{items:Todo[]}>=(props)=>{
    return <ul className={styles.todos}>
        {/* <li>Learn React</li>
        <li>Learn Typescript</li>
        <li>Do homework</li> */}
        {props.items.map(item=><TodoItem key={item.id} text={item.text}/>)}
    </ul>
}
export default Todos;