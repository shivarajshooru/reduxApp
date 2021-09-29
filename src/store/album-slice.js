import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const createAlbum = createAsyncThunk(
  'album/craeteAlbum',
  async (_, thunkAPI) => {
  

    let albumData;
    let photoData;
    let combineData = [];
    let photoCopy = [];
    let combineData2 = [];
    
  
    async function callAlbum(){
      albumData = await axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>res.data)
    
    photoData = await axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>res.data)
     
      
      albumData.forEach((adata,aindex) => { 
        if(aindex<5) {
         combineData.push(adata);
        }
       })
      //  console.log(combineData)
      let count = 0;
    for(let i=0; i<photoData.length; i++) {
      
      if(photoData[i].albumId<6) {
  
        let randomNumber = Math.floor(Math.random()*(250 - 50 + 1) ) + 50;
        photoData[i].number = randomNumber
       photoCopy.push(photoData[i])
        count = count+1;
        
        if(count >=10){
          i= i+40;
          count = 0;
        }
        }
      }

     
   
  for (let i=0; i<combineData.length;i++) {
    let sample=[]
   
    let count = 0;
    for(  let j=0; j<photoCopy.length; j++){
      
      sample.push(photoCopy[j])
      count= count+1;
      if(count>=10){
        
      
        combineData2.push([combineData[i],sample])
  count = 0;
  sample = [];
  i = i+1;
      }
      // console.log(photoCopy[j],j);
    }
    
    // combineData2.push([combineData[i],sample[j]])
  }
  // console.log(combineData2,"com2");
   return combineData2
  }
    

    return callAlbum();
  }
)

export const slice = createSlice({
    name: 'album',
    initialState: {
      entities: [],
    },
    reducers: { },
    extraReducers: (builder) => {
      builder.addCase(createAlbum.fulfilled, (state, action) => {
        
        state.entities.push(...action.payload)
      })
    }
  }
);
  
  export const { storeByPayload } = slice.actions;

  // export const selectCount = state => state.counter.value;

  export default slice.reducer; 