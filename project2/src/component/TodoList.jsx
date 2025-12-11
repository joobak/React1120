<<<<<<< HEAD
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className='TodoList'>
            <h4>Todo List</h4>
            <input className='searchbar'
                placeholder='검색어를 입력하세요' />
                
                <div className='list_wrapper'>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
                
            
        </div>
    );
}

export default TodoList;

=======
import React, { useState } from 'react';
import "./TodoList.css";
import TodoItem from './TodoItem';

const TodoList = ({todo, OnUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }

    const getSearchResult = () => {
        return search === "" ? 
                todo : 
                todo.filter((it)=> 
                    it.content.toLowerCase().includes(search.toLowerCase()))
    };


    return (
    <div className='TodoList'>
        <h4>Todo List</h4>
        <input className='searchbar'
            onChange={onChangeSearch} 
            //onClick={(e) => setSearch(e.target.value)}
            placeholder='검색어를 입력하세요' />

        <div className='list_wrapper'>
            {
                getSearchResult().map(
                    (it) => ( 
                        <TodoItem key={it.id} {...it}  OnUpdate = {OnUpdate}  onDelete = {onDelete}/>
                    )
                )
            }
        </div>

    </div>
    );
};

export default TodoList;
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
