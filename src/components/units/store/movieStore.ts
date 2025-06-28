import { configureStore, createSlice } from "@reduxjs/toolkit";

interface MovieState {
  boxOffice: Array<{ movieCode: string; title: string; poster: string }>;
}

const initialState: MovieState = {
  boxOffice: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setBoxOfficeMovies: (state, action) => {
      state.boxOffice = action.payload;
    },
  },
});

export const { setBoxOfficeMovies } = moviesSlice.actions;

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
