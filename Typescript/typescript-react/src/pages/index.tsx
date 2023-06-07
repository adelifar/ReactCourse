import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Todos from '@/components/Todos'
import Todo from '@/models/todo'
import NewTodo from '@/components/NewTodo'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const todos=[new Todo('Learn React'),new Todo( 'Learn typescript'),new Todo( 'Do Homework')]
  const [todos,setTodos]=useState<Todo[]>([]);
  const addHandler=(text:string)=>{
    //add to todo list
    const newTodo=new Todo(text);
    setTodos(prevTodos=>prevTodos.concat(newTodo))
  }
  return (
    <>
    <NewTodo onAddTodo={addHandler}/>
    <Todos items={todos}/>
    </>
  )
}
