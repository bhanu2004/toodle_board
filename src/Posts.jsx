import './Posts.css';
import {IoIosArrowBack} from 'react-icons/io';
import {BsSearch, BsBookmark, BsPlusLg} from 'react-icons/bs';
import EmptyPage from './components/EmptyPage';
import AddPostPopUp from './components/AddPostPopUp';
import SinglePost from './SinglePost';
import { useEffect, useState } from 'react';
// import { data } from './data';
import EditPostPopUp from './components/EditPostPopUp';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const Posts = ({data, setData})=>{
    const {idx} = useParams();
    const navigate = useNavigate();
    const [newPostClicked, setNewPostClicked] = useState(false);
    const title = data[idx].Title;
    const [postData, setPostData] = useState(data[idx].Posts);
    const [filteredPostData, setFilteredPostData] = useState(postData);
    const [checkBookMark, setCheckBookMark] = useState(false);
    const [updatePostClicked, setUpdatePostClicked] = useState(false);
    const [updateIdx, setUpdateIdx] = useState(0);
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    
    const rearrange = (st,end) =>{
        let tempPostData = [...postData];
        const DraggedData = tempPostData[st];
        const newData = tempPostData.filter((item,idx)=> st!=idx);
        newData.splice(end,0,DraggedData);
        setPostData(newData);
    }
    
    const handleBookMark = (id)=>{
        
        const newData = postData.map((data,idx)=>{
            if(idx==id){
                data.bookMarked = !data.bookMarked;
                return data;
            }
            return data;
        });
        console.log(newData);
        console.log(id);
        setPostData(newData);
        
        if(checkBookMark){
            showBookMarked();
        }
    }

    const showBookMarked = ()=>{
        setFilteredPostData((items)=>{
            return items.filter((data)=>{
                return data.bookMarked==true;
            })
        })
    }
    const showAllBookMarked = ()=>{
        setFilteredPostData(postData);
        
    }
    const clickBookMark = ()=>{
        if(checkBookMark==false){
            setCheckBookMark(true);
            showBookMarked();
        }
        else{
            setCheckBookMark(false);
            showAllBookMarked();
        }
    }

    const handleDelete = (idx) =>{
        
        setPostData((items)=>{
            const temp =  items.filter((currData, currIdx) => currIdx!==idx);
            return temp;
        });
        
       
    }

    const handleUpdate = (idx) =>{
        setUpdateIdx(idx);
        setUpdatePostClicked(true);
    }
    const filterPost = (e)=>{
        setSearchInput(e.target.value);
    }

     useEffect(()=>{
        if(checkBookMark){
            showBookMarked();
        }
        else showAllBookMarked();
     },[postData]);

     useEffect(()=>{
        const filteredData = postData.filter((item) => {
            return item.Title.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredPostData(filteredData);

    },[searchInput]);
    return(
        <>
            <div className="posts-container">
                <div className="header">
                    <div className="logo">
                        <IoIosArrowBack onClick={()=>navigate(-1)}className='backArrow'/>
                        <img className="logo-image" src='/img/logo.png' />
                        <p className='board-name'>{title}</p>
                    </div>
                    <div className="right-header">
                        <div className="search-post">
                            {searchClicked && <input type="text" value={searchInput} onChange={filterPost}  placeholder='Search Posts'/>}
                            <BsSearch className='search-post-sign' onClick={()=>setSearchClicked(!searchClicked)} />
                        </div>
                        <p className='right-header-bar'>|</p>
                        <BsBookmark onClick={clickBookMark} className={`bookMark-post ${checkBookMark? 'checked':''}`}/>
                    </div>
                    
                </div>
                <div className="postsBody">
                    <div className="postTopPart">
                        <h1>Your Posts</h1>
                        <button className="create-post" onClick={()=> setNewPostClicked(true)}><BsPlusLg className='plusSignPost' /> Create new post</button>
                    </div>
                    <DndProvider backend={HTML5Backend}>
                       
                        <div className="posts-collection" >
                            {/* <div>fkjdsakfja</div> */}
                            {filteredPostData.length!=0 ? filteredPostData.map((items,index)=>{
                            return <SinglePost checkBookMark={checkBookMark} rearrange={rearrange} handleUpdate = {handleUpdate} handleDelete = {handleDelete}  handleBookMark={handleBookMark} {...items} id={idx} key = {index} index={index} />
                        }): <EmptyPage />}
                        </div>
                           
                    </DndProvider>             
                  
                    
                    
                </div>
                {updatePostClicked && <EditPostPopUp setPostData = {setPostData} id={updateIdx} postData = {postData} setClick = {setUpdatePostClicked}/>}
                { newPostClicked && <AddPostPopUp idx ={idx}  postData = {postData} setPostData={setPostData} setClick = {setNewPostClicked}/>}
            </div>
        </>
    )
}
export default Posts;