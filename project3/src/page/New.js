import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componet/Header';
import Button from '../componet/Button';
import Editor from '../componet/Editor';
import Diary from './Diary';
import {usecontext} from "react";
import { DiaryDispatchContext } from '../App';



const New = () => {
    const navigate = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);
    const goBack = () =>{ 
        navigate(-1);
}

const onSubmit = (data) => {
    //onCreate(data);
    onCreate({...data});
    navigate("/", {relative: true});

};

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
            />
            <Editor onSubmit = {onSubmit} />
        </div>
    );
};

    export default New;