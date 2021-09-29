import {configureStore} from "@reduxjs/toolkit";
import albumreducer from "./album-slice"


export default configureStore({
    reducer: {
        album: albumreducer,
    }
})