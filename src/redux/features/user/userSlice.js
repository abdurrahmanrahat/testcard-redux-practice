import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";

const initialState = {
    name: "",
    email: "",
    isLoading: true,
    isError: false,
    error: "",
}

// sign up user
export const createUser = createAsyncThunk(
    "userSlice/createUser", // firstly give name then async function
    async ({ email, password }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        console.log(data);
        return;
    })

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.name = "";
                state.email = "";
                state.error = "";
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.name = payload.name;
                state.email = payload.email;
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.name = "";
                state.email = "";
                state.error = action.error.message;
            })
    }
})

export default userSlice.reducer;