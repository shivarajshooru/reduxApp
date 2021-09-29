import "./App.css";

import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "./store/album-slice.js";

import { unwrapResult } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();
  const [storeData, setStoreData] = useState('');
  let copyData = useSelector((data)=>data.album["entities"])
  

  

  function searchData(e) {
    
    
  
    let filAll = []
    let value = e.target.value;
    console.log(value.length,"value")
    copyData.forEach((data,index) => {
     let filterData =   data[1].filter((pdata) => {
       
      // console.log(pdata.title)
      return pdata.title.includes(value);
        
      });
      if(filterData.length ){
        console.log(filterData);
      filAll.push([data[0],filterData])
      }
    });
  if(value.length)
     setStoreData(filAll)
     else
     setStoreData(copyData)


  }

  useEffect(() => {
    dispatch(createAlbum())
      .then(unwrapResult)
      .then((res) => setStoreData(res));
  }, []);

  return (
    <div className="App">
      <TextField
        placeholder="enter some data shivaraj"
        fullWidth
        onChange={searchData}
      />
      {storeData.length
        ? storeData.map((data, dindex) => {
            return (<div key={dindex} className="main">
              <h2>{data[0].title}</h2>
              
                {data[1].map((pdata,pindex) => {
                  let color = pdata.number>75 ? "green" : "red";

                  // console.log(pdata.thumbnailUrl);
                  return(<div className="elem" key={pindex}> <img className="thum" key={pindex} src={pdata.thumbnailUrl}/>
                <div className="mid">
                  <h4>{pdata.title}</h4>
                  <a href={pdata.url} target="_blank">{pdata.url}</a>
                  </div>
                  <div className="ptime">
                    <p style={{color:color}}>$    {pdata.number}</p>
                    <p>10:00 AM</p>
                  </div>
                </div>
                  )
                })}
             

            </div>)
          })
        : null}
    </div>
  );
}

export default App;
