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

export default TodoEditor;