"use client";
import React, { useEffect, useState } from "react";
import GameComponent from "./game";
import { useFetchGame } from "../../../hooks/useGame";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

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



const GamesList = () => {
  const user = useSelector((state: RootState) => state.user);
  useFetchGame(user?.id);
  const games: GamesState = useSelector((state: RootState) => state.game);
  console.log("User state:", user);


  return (
    <div className="flex flex-col items-center">
        {games.games.length > 0 ? (
          games.games.map((game, index) => <GameComponent game={game} key={index} />)
        ) : (
          <p>No games found</p>
        )}
    </div>
  );
};

export default GamesList;
