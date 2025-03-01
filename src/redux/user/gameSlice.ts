import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Game {
  id: string;
  courseName: string;
  location: string;
  numberOfHoles: number;
  parTotal: number;
  holePars: number[];
  rating: number;
  score: number;
  date: string;
}

interface GamesState {
  games: Game[];
}

const initialState: GamesState = {
  games: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
    addGame: (state, action: PayloadAction<Game>) => {
      state.games.push(action.payload);
    },
    clearGames: (state) => {
      state.games = [];
    },
  },
});

export const { setGames, addGame, clearGames } = gameSlice.actions;
export default gameSlice.reducer;
