import {RxCross1} from 'react-icons/rx';
import {BoardColors} from '../data';
import { useState } from 'react';
const AddBoardPopUp = ({data,setData,setClick})=>{
    const [newBoardData, setNewBoardData] = useState({
        Title: "",
        color: "",
        Posts: []
    });
    const [fillDetail, setFillDetail] = useState(false);

    const [checkColor, setCheckColor] = useState([false,false,false,false]);

    const handleUpdate = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setNewBoardData({...newBoardData,[name]:value});
    }
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
        
    const handleClick = ()=>{
        if(newBoardData.Title =="" || newBoardData.color ==""){
            setFillDetail(true);
        }
        else{
            setFillDetail(false);
            setData([...data, newBoardData]);
            setNewBoardData({
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
                    <input className='inputBoardName' type="text" name="Title" value={newBoardData.Title} onChange={handleUpdate} placeholder='Board Name' />
                    <h1 className='select-Colour-text'> Select post colour</h1>
                    <p>Here are some templates to help you get started</p>
                    <div className="selectColors">
                        {BoardColors.map((data,idx)=>{
                            return (
                                <div className="colorbox" onClick={() => {setNewBoardData({...newBoardData,['color']:data.color});setBorder(idx);}}  style={{backgroundColor:data.color,border:checkColor[idx]==true?"1px solid black":"0"}}></div>
                            )
                        })}
                        
                    </div>
                    {fillDetail && <p style={{color:'red'}}>Fill all fields</p>}
                    <button className='createBoard' onClick = {handleClick}>Create board</button>
                </div>
            </div>
            
        </>
    )
}
export default AddBoardPopUp;