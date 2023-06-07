import React, { useRef } from "react";
import styles from './NewTodo.module.css'

const NewTodo:React.FC<{onAddTodo:(t:string)=>void}>=(props)=>{
    const textInputRef=useRef<HTMLInputElement>(null);  
    const submitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
      const enteredText=  textInputRef.current!.value;
      if(enteredText?.trim().length===0){
        //error
        return;
      }
      props.onAddTodo(enteredText?.trim());
    }
    return <form onSubmit={submitHandler    } className={styles.form}>
        <label htmlFor="text">Todo text   </label>
        <input type="text" id="text" ref={textInputRef}/>
        <button>Add todo</button>
    </form>
}
export default NewTodo;