import {RxCross1} from 'react-icons/rx';
import {CiImageOn} from 'react-icons/ci';
import { useRef, useState, useContext } from 'react';
import {Data, SetData} from '../App';
const AddPostPopUp = ({setPostData, postData,setClick,idx})=>{

    const data = useContext(Data);
    const setData = useContext(SetData);

   const fileUpload = useRef(null);

    const [newPostData, setNewPostData] = useState({
        Title:"",
        img:"",
        bookMarked:false,
        desc:""
    })
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setNewPostData({...newPostData,[name]:value});

    }
    const fileHandler = (e)=>{
        const src = URL.createObjectURL(e.target.files[0]);
        setNewPostData({...newPostData,['img']:src})
    }

    const handleSubmit = ()=>{
        
        setPostData([newPostData,...postData]);
        console.log("id",idx);
        console.log("postData",postData);
        let currData = data.map((data,id)=>{
            if(id==idx){
                data.post = postData;
                return data;
            }
            else return data;
        });
        console.log("currData",currData);
        setData(currData);
        console.log("data", data);

        setNewPostData({
            Title:"",
            img:"",
            bookMarked:false,
            desc:""
        })
        setClick(false);
    }
    return (
        <>
        <div className="fullPopUpPost">
                <div className="addPost">
                    <h1 className='createPostText'>Create a post</h1>
                    <p className='paraPost'>Write something for your post</p>
                    <div className="subject-post">
                        <p>Subject</p>
                        <input className='inputPostName' name='Title' onChange={handleChange} value={newPostData.Title} type="text"/>
                        <div className="import-image">
                            <button className='addImagebtn' onClick={()=> {fileUpload.current.click()}}><CiImageOn className='imgAdd'/>Add your image</button>
                            <input type="file" onChange={fileHandler} ref={fileUpload} hidden placeholder='Add your image'/>
                            <img className='imagePreview' src={newPostData.img} alt="preview" />
                        </div>
                        
                    </div>
                    <button className='crossPopUp' onClick={() => setClick(false)}><RxCross1 /></button>
                    
                    <h1 className='post-desc-text'> What's on your mind?</h1>
                    <input name='desc' onChange={handleChange} value={newPostData.desc} className='inputPostName' type="text" />
                    <button onClick={handleSubmit} className='createBoard'>Publish</button>
                </div>
            </div>
        
        </>
    )
}
export default AddPostPopUp;