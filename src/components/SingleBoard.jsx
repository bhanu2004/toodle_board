import { useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import PageModify from './PageModify';
import { useNavigate } from 'react-router-dom';

const SingleBoard = ({id, handleDelete, handleUpdate, data})=>{
    const [editPageClicked, setEditPageClicked] = useState(false);
    const navigate = useNavigate();
    return(
        <>
        <div  className="board">
            <div className="board-box " onClick={()=> navigate(`/posts/${id}`)} style = {{backgroundColor: data.color}}> </div>
            <p className="board-title" onClick={()=> navigate(`/posts/${id}`)}>{data.Title}</p>
            <BsThreeDotsVertical className='dots' onClick={()=> setEditPageClicked(!editPageClicked)}/>
            {editPageClicked && <PageModify setEditPageClicked = {setEditPageClicked} handleUpdate={handleUpdate} handleDelete={handleDelete} id = {id}/>}
        </div>
        </>
    )
}
export default SingleBoard;