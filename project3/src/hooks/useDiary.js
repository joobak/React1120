import { useContext, useEffect, useState } from "react"
import { DiaryStateContext } from "../App"
<<<<<<< HEAD
import { replace, useParams, useSearchParams } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

const useDiary = (id)=>{
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
<<<<<<< HEAD

useEffect(()=> {
    const matchDiary =
    data.find( (it) => String(it.id) === String(id));

    if(matchDiary){
        setDiary(matchDiary);
    }else{
        alert("일기가 존재하지 않습니다.");
        navigator("/", {replace :true})
    }

}, [id, data]);
return diary;
    }
=======
    const navigate  = useNavigate();

    useEffect(()=>{
        const matchDiary = 
            data.find( (it)=> String(it.id) 
                        === String(id));
        if(matchDiary){
            setDiary(matchDiary);
        }else{
            alert("일기가 존재하지 않습니다.");
            navigate("/", {replace: true})
        }
        
    }, [id, data]);

    return diary;
}
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41

export default useDiary;