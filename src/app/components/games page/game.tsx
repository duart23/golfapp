import React from 'react'

interface Game {
    courseName: string
    location: string
    numberOfHoles: number
    parTotal: number
    rating: number
    score: number
    date: Date
}

const Game = ({ game }: { game: Game }) => {
  return (
    <div className="game bg-gray-200 p-4 my-4">
      <h2>{game.courseName}</h2>
      <p>Location: {game.location}</p>
      <p>Number of Holes: {game.numberOfHoles}</p>
      <p>Par Total: {game.parTotal}</p>
      {/* <p>Hole Pars: {game.holePars.join(', ')}</p> */}
      <p>Course Rating: {game.rating}</p>
      <p>Score: {game.score}</p>
      <p>Date: {game.date.toString()}</p>
    </div>
  )
};

export default Game;


