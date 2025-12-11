<<<<<<< HEAD
import { useState } from 'react'
=======
import { useReducer, useRef, useState } from 'react'
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
<<<<<<< HEAD
=======
import TestComp from './component/TestComp'
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime(),
  },
]

function App() {
<<<<<<< HEAD
    
  const [todo, setTodo] = useState(mockTodo);
=======
  
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
  
  /* 데이타 추가 하기*/
  const onCreate = (content) => {
    const newItem = {
<<<<<<< HEAD
      id: 0,
=======
      id: idRef.current,
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
      isDone: false,
      content,
      createDate: new Date().getTime(),
    }
    setTodo([...todo, newItem]);
<<<<<<< HEAD
=======
    idRef.current += 1;
  };

  /* 데이타 수정 하기*/
  const OnUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    )
  };

  /* 데이타 삭제 하기*/
  const onDelete = (targetId) =>{
    setTodo(
      todo.filter((it) => it.id !== targetId)
    )
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
  };
  
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <TodoEditor  onCreate = {onCreate}/>
      <TodoList />
=======

      {/* <TestComp /> */}

      <Header />
      <TodoEditor  onCreate = {onCreate}  />
      <TodoList todo = {todo} OnUpdate = {OnUpdate}  onDelete={onDelete}/>
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
