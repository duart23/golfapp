"use client";
import React, { useEffect, useState } from "react";
import Game from "./game";
import { useFetchGame } from "../../../hooks/useGame";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const GamesList = () => {
  const user = useSelector((state: RootState) => state.user);
  useFetchGame(user?.id);
  const games = useSelector((state: RootState) => state.game);
  console.log("User state:", user);

  


  console.log(JSON.stringify(games, null, 2)); // ✅ Pretty-prints the object


  return (
    <div className="flex flex-col items-center">
      <ul>
        {/* {games.length > 0 ? (
          games.map((game, index) => <Game game={game} key={index} />)
        ) : (
          <p>No games found</p>
        )} */}
      </ul>
    </div>
  );
};

export default GamesList;
