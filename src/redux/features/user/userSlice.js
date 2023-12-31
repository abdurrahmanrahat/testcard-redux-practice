import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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
    async ({ email, password, name }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: name
        })
        console.log(data);

        return {
            email: data.user.email,
            name: data.user.displayName
        };
    })

// login user
export const loginUser = createAsyncThunk(
    "userSlice/loginUser",
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password);
        return {
            email: data.user.email,
            name: data.user.displayName
        }
    }
)

// google login user
export const googleLoginUser = createAsyncThunk(
    "userSlice/googleLoginUser",
    async () => {
        const googleProvider = new GoogleAuthProvider();
        const data = await signInWithPopup(auth, googleProvider);
        console.log(data);
        return {
            email: data.user.email,
            name: data.user.displayName
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        logoutUser: (state) => {
            state.name = "";
            state.email = "";
        }
    },
    extraReducers: (builder) => {
        // for creating user
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.name = "";
            state.email = "";
            state.error = "";
        }).addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.name = payload.name;
            state.email = payload.email;
            state.error = "";
        }).addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.error = action.error.message;
        })

        // for login user
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.name = "";
            state.email = "";
            state.error = "";
        }).addCase(loginUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.name = payload.name;
            state.email = payload.email;
            state.error = "";
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.error = action.error.message;
        })

        // for google login user
        builder.addCase(googleLoginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.name = "";
            state.email = "";
            state.error = "";
        }).addCase(googleLoginUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.name = payload.name;
            state.email = payload.email;
            state.error = "";
        }).addCase(googleLoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.error = action.error.message;
        })
    }
})

export const { setUser, toggleLoading, logoutUser, } = userSlice.actions;

export default userSlice.reducer;