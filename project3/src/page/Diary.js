import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import { getFormattedDate } from '../util';
<<<<<<< HEAD
import Button from '../componet/Button';
import Header from "../componet/Header";   
import Viewer from "../componet/Viewer";   

=======
import Header from '../componet/Header';
import Button from '../componet/Button';
import Viewer from '../componet/Viewer';
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

const Diary = () => {
    const {id} = useParams();
    const data = useDiary(id);
    
<<<<<<< HEAD
    const navigator = useNavigate();

    const goBack = () => {
        navigator(-1);
        }

        const goEdit = () =>{
            navigator(`/edit/${id}`);
        }

    if(!data){
    return <div>일기 데이타를 불러오고 있습니다..</div>
    }else{
        const {date, emotionId, content} = data;
      const title = `${getFormattedDate(new Date(Number(date)))}기록`;
=======
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }
    
    if(!data){       
        return <div>일기 데이타를 불려오고 있습니다..</div>
    }else{
        const {date, emotionId, content}  = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
        
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
        return (
            <div>
                <Header
                    title={title}
                    leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
<<<<<<< HEAD
                    rightChild={<Button text={"수정하기"} onClick={goEdit}/>}
                    />

        
=======
                    rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                />                
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
                <Viewer content={content} emotionId = {emotionId} />
            </div>
        );
    }
};

export default Diary;