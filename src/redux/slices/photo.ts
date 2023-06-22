import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPhotos as getPhotos } from "../../services/photos";

import { RootState } from "../store";

export const STATUS = {
  FULFILLED: "fulfilled",
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
};

export const CAN_FETCH = [STATUS.IDLE, STATUS.REJECTED];

const initialState = {
  loading: false,
  status: STATUS.IDLE,
  value: [],
};

export const fetchPhotos = createAsyncThunk(
  "fetchPhotos",
  async (args, { getState }) => {
    const { photo } = getState() as RootState;
    console.log("photo", photo);

    const { value: areasValue, status } = photo;

    if (status === STATUS.PENDING) {
      try {
        const data = await getPhotos();

        console.log("data", data);

        return data;
      } catch (error) {
        console.log(error);
      }
    }

    if (status === STATUS.FULFILLED) {
      return areasValue;
    }

    return initialState.value;
  }
);

export const photosSlice = createSlice({
  name: "allocationAreas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        if (CAN_FETCH.includes(state.status)) {
          return { ...state, loading: true, status: STATUS.PENDING };
        }

        return state;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        return {
          loading: false,
          status: STATUS.FULFILLED,
          value: action.payload,
        };
      })
      .addCase(fetchPhotos.rejected, (state) => {
        return { ...state, loading: false, status: STATUS.REJECTED };
      });
  },
});

export default photosSlice.reducer;
