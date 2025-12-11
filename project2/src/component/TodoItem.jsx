import React from 'react';
import "./TodoItem.css";

<<<<<<< HEAD
const TodoItem = () => {
    return (
        <div className='TodoItem'>
        <div className='checkbox_col'>
          <input type="checkbox" />
            
        </div>

        <div className='title_col'>
            할일
        </div>

        <div className='date_col'>
            {new Date().toLocaleDateString()}
        </div>

        <div className='btn_col'>
            <botton>삭제</botton>
        </div> 
          </div>
            
        
=======
const TodoItem = ({id, content, isDone, createDate, OnUpdate, onDelete}) => {

    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type="checkbox" 
                onClick={ ()=> OnUpdate(id)}
                checked={isDone} />
            </div>

            <div className='title_col'>
                {content}
            </div>

            <div className='date_col'>
                {new Date(createDate).toLocaleDateString()}
            </div>

            <div className='btn_col'>
                <button onClick={() =>onDelete(id) }>삭제</button>
            </div>
        </div>
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
    );
};

export default TodoItem;