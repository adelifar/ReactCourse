import Todo from "@/models/todo";
import React, { FC, useState } from "react";
type TodoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
export const TodoContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addHandler = (text: string) => {
    //add to todo list
    const newTodo = new Todo(text);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const removeHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((t) => t.id !== id));
  };
  const contextValue: TodoContextType = {
    items: todos,
    addTodo: addHandler,
    removeTodo: removeHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
