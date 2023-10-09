import { BsFillBookmarkFill,BsThreeDotsVertical} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import PostModify from "./components/PostModify";
import { useState, useRef } from "react";
import {useDrop} from 'react-dnd';
import { useDrag } from "react-dnd";

const SinglePost = ({checkBookMark,Title,img, rearrange,desc,bookMarked, id, handleBookMark, handleDelete, handleUpdate,index})=>{
    const [editPostClicked, setEditPostClicked] = useState(false);

    const [heartClick, setHeartClick] = useState(false);
    const [count, setCount] = useState(0);
 
    const [{isDragging}, dragRef] = useDrag({
        type: "item",
        item: {index},
        
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
        }),
    })

    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;

            if(dragIndex!=hoverIndex)rearrange(dragIndex, hoverIndex);
            item.index = hoverIndex
        },
    })
    const handleHeartClick = ()=>{
        if(heartClick==true){
            setHeartClick(false);
            setCount(count-1);
        }
        else{
            setHeartClick(true);
            setCount(count+1);
        }
    }

    const handleEdit = ()=>{
        if(checkBookMark){
            alert("First remove bookmark");

        }
        else setEditPostClicked(!editPostClicked);
    }
   
   const ref = useRef(null);
   const dragDropRef = dragRef(dropRef(ref));
    
    return(
        <>
      
                    <div className="post-container" ref={dragDropRef}>
                       
                        <div className="post-head">
                            <div className="postTitle">
                                <h1>{Title}</h1>
                            </div>
                            <div className="postOptions">
                                <BsFillBookmarkFill onClick={()=>handleBookMark(index)} className={`bookMark-post ${bookMarked? 'checked': ''}`}/>
                                <BsThreeDotsVertical onClick = {handleEdit}/>
                            </div>
                        </div>
                        <div className="SinglepostBody">
                            <img src={img} alt="" />
                            <div className="post-desc">
                                <p>{desc} </p>
                            </div>
                            <div className="SinglePostLikeBottom">
                                <AiFillHeart  style={heartClick && {color:'#fb3958'}} onClick={handleHeartClick}/> <p className="like-count">{count}</p>
                            </div>
                        </div>
                        
                        {editPostClicked && <PostModify setEditPostClicked={setEditPostClicked} handleUpdate={handleUpdate} handleDelete={handleDelete} id = {index}/>}
                    </div>
          
        
        
        </>
    )
}

export default SinglePost;