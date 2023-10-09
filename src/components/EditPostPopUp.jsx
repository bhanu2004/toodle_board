import {RxCross1} from 'react-icons/rx';
import {CiImageOn} from 'react-icons/ci';
import { useRef, useState } from 'react';
const EditPostPopUp = ({setPostData, postData,setClick,id})=>{

   const fileUpload = useRef(null);

    const [updatedPostData, setUpdatedPostData] = useState(postData[id]);
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUpdatedPostData({...updatedPostData,[name]:value});
    }
    const fileHandler = (e)=>{
        const src = URL.createObjectURL(e.target.files[0]);
        setUpdatedPostData({...updatedPostData,['img']:src})
    }

    const handleSubmit = ()=>{
        
        console.log("updated",updatedPostData);
        console.log(id);
        console.log(postData);
        let items = postData;
        items = items.filter((data,idx)=>{
            return id!=idx;
        })

        items = [updatedPostData, ...items];
        setPostData(items);
        setUpdatedPostData({
            Title:"",
            img:"",
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
                        <input className='inputPostName' name='Title' onChange={handleChange} value={updatedPostData.Title} type="text"/>
                        <div className="import-image">
                            <button className='addImagebtn' onClick={()=> {fileUpload.current.click()}}><CiImageOn className='imgAdd'/>Add your image</button>
                            <input type="file" onChange={fileHandler} ref={fileUpload} hidden placeholder='Add your image'/>
                            <img className='imagePreview' src={updatedPostData.img} alt="preview" />
                        </div>
                        
                    </div>
                    <button className='crossPopUp' onClick={() => setClick(false)}><RxCross1 /></button>
                    
                    <h1 className='post-desc-text'> What's on your mind?</h1>
                    <input name='desc' onChange={handleChange} value={updatedPostData.desc} className='inputPostName' type="text" />
                    <button onClick={handleSubmit} className='createBoard'>Publish</button>
                </div>
            </div>
        
        </>
    )
}
export default EditPostPopUp;