import './Dashboard.css';
import AddBoardPopUp from './components/AddBoardPopUp';
import { useEffect, useState } from 'react';
import SingleBoard from './components/SingleBoard';
import EditBoardPopUp from './components/EditBoardPopUp';
// import { data } from './data';
const Dashboard = ({boardData,setboardData})=>{
    const [createBoardClicked, setCreateBoardClicked] = useState(false);
    const [updateBoardClicked, setUpdateBoardClicked] = useState(false);
    // const [boardData, setboardData] = useState(data);
    const [filterData, setFilterData] = useState(boardData);
    const [searchInput, setSearchInput] = useState('');
    const [updateIdx, setUpdateIdx] = useState(0);
    const handleDelete = (idx) =>{
        setboardData((items)=>{
            return items.filter((currData, currIdx) => currIdx!==idx);
        })
    }

    const handleUpdate = (idx) =>{
        setUpdateIdx(idx);
        setUpdateBoardClicked(true);
    }
    const filterBoard = (e)=>{
        setSearchInput(e.target.value);
    }
    useEffect(()=>{
        const filteredData = boardData.filter((item) => {
            return item.Title.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilterData(filteredData);

    },[searchInput]);

    useEffect(()=>{
        setFilterData(boardData);
        setSearchInput('');
    },[boardData])
    return(
        <>
        <div className= "dash-container">
            
            <div className="header">
                <div className="logo">
                    <img className="logo-image" src='/img/logo.png' />
                    <p className='logo-name'>toodle</p>
                </div>
                <div className="right-header">
                    <div className="search-board">
                        <input type="text" onChange={filterBoard} value={searchInput} placeholder='Search' />
                    </div>
                    <button className="create-board" onClick={()=>setCreateBoardClicked(true)}>create new board</button>
                </div>
                
            </div>
            <div className="dash-body">
                <h1 className='board-name'>My boards</h1>
                <div className="boards">
                    {filterData?.map((data,idx) =>{
                        return(
                            <SingleBoard onClick={()=>console.log("board clicked")} handleUpdate = {handleUpdate} handleDelete = {handleDelete} id = {idx} key = {idx} data = {data} />
                        )
                    })}
                    
                
                    
                </div>
            </div>
            {updateBoardClicked && <EditBoardPopUp setData = {setboardData} id={updateIdx} data = {boardData} setClick = {setUpdateBoardClicked}/>}
            {createBoardClicked && <AddBoardPopUp setData = {setboardData}  data = {boardData} setClick = {setCreateBoardClicked}/>}
        </div>
        
        </>
    )
}
export default Dashboard;