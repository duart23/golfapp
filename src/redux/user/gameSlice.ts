import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Game {
  id: string;
  userId: number;
  courseName: string;
  location: string;
  parTotal: number;
  holePars: number[];
  holeScores: number[];
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
      state.games = action.payload.map((game) => ({
        ...game,
        holePars: Object.values(game.holePars) as number[],
        holeScores: Object.values(game.holeScores) as number[],
      }));
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
