import './App.css';
import {data} from './data';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Posts from './Posts';
import {Routes, Route} from 'react-router-dom';
import { createContext } from 'react';
// import { data } from './data';
const Data = createContext();
const SetData = createContext();

function App() {
// const [walldata, setWallData] = useState(data);
// const [wallposts, setWallPosts] = useState(posts);

const [newdata, setNewData] = useState(data);

  
  return (
    <div className="App-container ">
      <Data.Provider value={newdata}>
        <SetData.Provider value={setNewData}>

          <Routes>
            <Route index element={<Dashboard boardData={newdata} setboardData = {setNewData}/>} />
            <Route exact path = '/posts/:idx' element={<Posts data={newdata} setData={setNewData}/>} />
          </Routes>

        </SetData.Provider>
      </Data.Provider>
      
      
    </div>
  );
}

export default App;
export{Data, SetData};
