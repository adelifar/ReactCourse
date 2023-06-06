import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Todos from '@/components/Todos'
import Todo from '@/models/todo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const todos=[new Todo('Learn React'),new Todo( 'Learn typescript'),new Todo( 'Do Homework')]
  return (
    <Todos items={todos}/>
  )
}
