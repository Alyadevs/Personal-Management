import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await api.get("/users");
  return res.data;
});


export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const res = await api.post("/users", user);
  return res.data;
});


export const updateUser = createAsyncThunk("users/updateUser", async ({ id, user }) => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
});


export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await api.delete(`/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    liste: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.liste = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.pending, (state) => { state.status = "loading"; })
      .addCase(fetchUsers.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; })

      .addCase(addUser.fulfilled, (state, action) => {
        state.liste.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.liste.findIndex(u => u._id === action.payload._id);
        if (index !== -1) state.liste[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.liste = state.liste.filter(u => u._id !== action.payload);
      });
  }
});

export default userSlice.reducer;
