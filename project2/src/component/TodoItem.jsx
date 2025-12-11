import React from 'react';
import "./TodoItem.css";

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
            
        
    );
};

export default TodoItem;