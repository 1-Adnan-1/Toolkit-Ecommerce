import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    categories:[],
}


export const getCategories=createAsyncThunk('category',async()=>{
    const responce=await fetch('https://fakestoreapi.com/products/categories')
    const data=responce.json();
    return data;
})
const categorySlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.fulfilled ,(state,action)=>{
         state.categories=action.payload;
        })
    }
})

export default categorySlice.reducer;