import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const charactersSlice = createSlice({
    name:"characters",
    initialState: {
        items:[],
        status:"idle",
        error:false,
        page:0,
        hasNextPage:true,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        
        builder
        .addCase(getAllCharactersAsync.pending, (state,action) => {
            state.status="loading"
        })
        .addCase(getAllCharactersAsync.fulfilled, (state,action) => {
            state.items = [...state.items, ...action.payload]
            state.status="succeed"
            state.page += 1
          
            if(action.payload.length < 20) {
                state.hasNextPage=false
            }
        })
        
        .addCase(getAllCharactersAsync.rejected, (state,action) => {
            state.error = action.error.message
            state.status="failed"
        })
    }
})




export const getAllCharactersAsync = createAsyncThunk("characters/getAllCharactersAsync", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?page=${page}`)
    console.log(res.data)
    return res.data.results
})





export default charactersSlice.reducer