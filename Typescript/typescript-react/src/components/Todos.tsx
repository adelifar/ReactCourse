import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import TodosContext from "@/sotre/todos-context";
const Todos: React.FC = (  props) => {
    const ctx=useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          onRemove={ctx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};
export default Todos;
