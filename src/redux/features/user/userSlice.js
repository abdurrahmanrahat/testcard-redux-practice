import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Mir Hussain",
    email: "mirhussain@gmail.com",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
})

export default userSlice.reducer;