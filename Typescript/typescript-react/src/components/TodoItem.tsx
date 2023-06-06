import { FC } from "react";

const TodoItem:FC<{text:string}>=(props)=>{
return <li >{props.text}</li>
}

export default TodoItem;