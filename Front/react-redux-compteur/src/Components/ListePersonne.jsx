import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fetchPersonnes = createAsyncThunk(
  "personnes/fetchPersonnes",
  async () => {
    const res = await api.get("/users");
    return res.data;
  }
);

const personneSlice = createSlice({
  name: "personnes",
  initialState: { liste: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonnes.fulfilled, (state, action) => {
        state.liste = action.payload;
      });
  },
});

export default personneSlice.reducer;
