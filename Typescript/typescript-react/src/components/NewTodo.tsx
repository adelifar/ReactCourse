import React, { useContext, useRef } from "react";
import styles from './NewTodo.module.css'
import TodosContext from "@/sotre/todos-context";

const NewTodo:React.FC=(props)=>{
  const ctx=useContext(TodosContext)
    const textInputRef=useRef<HTMLInputElement>(null);  
    const submitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
      const enteredText=  textInputRef.current!.value;
      if(enteredText?.trim().length===0){
        //error
        return;
      }
      ctx.addTodo(enteredText?.trim());
    }
    return <form onSubmit={submitHandler    } className={styles.form}>
        <label htmlFor="text">Todo text   </label>
        <input type="text" id="text" ref={textInputRef}/>
        <button>Add todo</button>
    </form>
}
export default NewTodo;