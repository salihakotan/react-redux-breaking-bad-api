import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items:[],
        status:"idle",
        error:null

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getQuotesAsync.pending,(state,action) => {
            state.status ="loading"
        })
        .addCase(getQuotesAsync.fulfilled,(state,action) => {
            state.items = action.payload
            state.status ="succeeded"
        })
        .addCase(getQuotesAsync.rejected,(state,action) => {
            state.status = "failed"
            console.log(action.error.message)
        })
      
    }
})


export const getQuotesAsync = createAsyncThunk("quotes/getQuotesAsync" ,async() => {
    const res = await axios("http://127.0.0.1:5500/src/pages/Quotes/quotes.json")
    return res.data
})




export const selectQuotes = (state) => state.quotes.items

export const selectQuotesStatus = (state) => state.quotes.status
export const selectQuoteError = (state) => state.quotes.error 


export default quotesSlice.reducer