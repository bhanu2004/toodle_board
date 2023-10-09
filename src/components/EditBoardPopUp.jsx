
import {RxCross1} from 'react-icons/rx';
import {BoardColors} from '../data';
import { useState } from 'react';
const EditBoardPopUp = ({data,setData,setClick,id})=>{
    const [updatedData, setUpdatedData] = useState(data[id]);
    const [checkColor, setCheckColor] = useState([false,false,false,false]);

    const setBorder = (idx)=>{
        let temp = checkColor;
        for(let i=0;i<temp.length;i++){
            if(i==idx){
                temp[i]=true;
            }
            else temp[i] = false;
        }
        setCheckColor(temp);
    }

    const handleUpdate = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUpdatedData({...updatedData,[name]:value});
        console.log(updatedData);
    }

    const handleClick = async()=>{
        if(updatedData.Title =="" || updatedData.color ==""){
            console.log("fill the details");
        }
        else{
            let items = data;
            items = data.filter((data,idx)=>id!=idx);
            items = [updatedData,...items];
            setData(items);

          
            setUpdatedData({
                Title:"",
                color:"",
                Posts:[]
            });
            setCheckColor([false,false,false,false]);
            setClick(false);
        }
    }
    return(
        <>
            <div className="fullPopUpBoard">
                <div className="addBoard">
                    <h1>Add a name for your board</h1>
                    <button className='crossPopUp' onClick={()=>setClick(false)}><RxCross1/></button>
                    <input className='inputBoardName' type="text" name="Title" value={updatedData.Title} onChange={handleUpdate} placeholder='Board Name' />
                    <h1 className='select-Colour-text'> Select post colour</h1>
                    <p>Here are some templates to help you get started</p>
                    <div className="selectColors">
                        {BoardColors.map((data,idx)=>{
                            return (
                                <div className="colorbox" onClick={() => {setUpdatedData({...updatedData,['color']:data.color});setBorder(idx)}}  style={{backgroundColor:data.color,border:checkColor[idx]==true?"1px solid black":"0"}}></div>
                            )
                        })}
                        
                    </div>
                    <button className='createBoard' onClick = {handleClick}>Update board</button>
                </div>
            </div>
            
        </>
    )
}
export default EditBoardPopUp;