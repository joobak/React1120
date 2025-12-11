<<<<<<< HEAD
import React, { useState } from "react";
import "./TodoEditor.css";


const TodoEditor = () => {

    const [content, setContent] = useState("");
    const onChangeContent = (e)=>{
        setContent(e.targer.value);
    }    

    return (
        <div className="TodoEditor">
           <h4>새로운 TOdo 작성하기</h4>
           <div className='editor_warpper'>
            <input
            onChange={onChangeContent}
            placeholder='새로운 Todo...' />

            <button>추가</button>
           </div>
        </div>
    );
}
=======
import React, { useRef,useState } from 'react';
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return ;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) =>{
        if( e.keyCode === 13){
            onSubmit();
        }
    };


    return (
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기 </h4>
            <div className='editor_wrapper'>
                <input 
                onChange={onChangeContent}
                ref = {inputRef}
                value={content}
                onKeyDown={onKeyDown}
                placeholder='새로운 Todo...' />
                
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

export default TodoEditor;