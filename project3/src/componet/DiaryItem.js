<<<<<<< HEAD
import React from 'react';
import "./DiaryItem.css";
import { useNavigate } from 'react-router-dom';
import { getEmotionImgById } from "../util";
import Button from "./Button";   

const DiaryItem = ({ id, content, emotionId, date }) => {
    const navigate = useNavigate();

    // ⭐ goDetail 함수 정의
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };
=======
import "./DiaryItem.css";
import { useNavigate } from 'react-router-dom';
import {getEmotionImgById} from "../util";
import Button from './Button';

const DiaryItem = ({id, content, emotionId, date}) => {
    const navigate = useNavigate();
    
    const goDetail = () => {
        navigate(`/diary/${id}`);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

    return (
        <div className='DiaryItem'>
            <div
                onClick={goDetail}
                className={["img_section", `img_section_${emotionId}`].join(" ")}
            >
<<<<<<< HEAD
                <img
                    alt={`emotion${emotionId}`}
                    src={getEmotionImgById(emotionId)}
                />
=======
                <img alt={`emotion${emotionId}`} 
                    src={getEmotionImgById(emotionId)} />
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
            </div>

            <div className='info_section' onClick={goDetail}>
                <div className='date_wrapper'>
<<<<<<< HEAD
                    {new Date(parseInt(date)).toLocaleString()}
                </div>
                <div className='content_wrapper'>
                    {content.slice(0, 25)}
=======
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className='content_wrapper'>
                    {content.slice(0,25)}
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
                </div>
            </div>

            <div className='button_section'>
                <Button onClick={goEdit} text={"수정하기"} />
            </div>
<<<<<<< HEAD
=======
            
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
        </div>
    );
};

<<<<<<< HEAD
export default DiaryItem;
=======
export default DiaryItem;
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
