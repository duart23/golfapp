"use client";
import { AddGame } from "@/app/components/games page/addGame";
import GamesList from "@/app/components/games page/gamesList";
import { useState } from "react";

export default function Games() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {setIsModalOpen(false)};
  const handleOpen = () => {setIsModalOpen(true)};



  return (
    <div>
      <h1 className="text-center text-3xl p-4 text-blue-400">Games</h1>
      <div className="buttons flex justify-between p-8">
        <select
          value=""
          // onChange=""
          id="orderBy"
          name="gender"
          className="w-20 border-2 p-2 my-2 rounded-md "
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="latest">Latest</option>
          <option value="Oldest">Oldest</option>
          <option value="scoreUp">Score - High to Low</option>
          <option value="scoreDown">Score - Low to High</option>
        </select>
        <button className="btn bg-blue-500 rounded-lg p-2 px-4 text-white"
        onClick={handleOpen}>
          Add Game
        </button>
      </div>
      <div>
        <GamesList />

      {isModalOpen && <AddGame onClose={handleClose} />}
      </div>
    </div>
  );
}
