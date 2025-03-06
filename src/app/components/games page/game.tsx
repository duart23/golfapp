import React from "react";
import HolePars from "./holePars";
import { DateComponent } from "../date";

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


const Game = ({ game }: { game: Game }) => {

  const holePars = [2, 3, 5, 4, 4, 3, 5, 4, 5, 1, 3, 5, 4, 4, 3, 5, 2, 4,];


  return (
    <div className="game rounded-xl bg-gray-200 w-4/5 p-4 m-4">
      <div className="top flex justify-between px-4 pb-3">
        <h2>
          {game.courseName} - {game.location}
        </h2>
        <DateComponent isoDate={game.date}/>
      </div>
      <div className="bottom flex justify-between pl-8 ml-4">
        <div className="stats text-center grid grid-cols-2 gap-2 w-2/5">
          <p>Score: {game.score}</p>
          <p>Par Total: {game.parTotal}</p>
          <p>Best Hole: {game.numberOfHoles /* checking which hole has the less strokes compared to its par*/}</p>
          <p>Course Rating: {game.rating}</p>
        </div>
        <div className="holes w-3/5 flex justify-end pr-4">
          <HolePars holePars={holePars} />
        </div>
      </div>
    </div>
  );
};

export default Game;
