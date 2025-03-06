interface User {
  firstName: string;
  lastName: string;
  handicap: number;
}

export default function InfoBox({ user }: { user: User }) {
  return (
    <div className="container bg-gray-200 w-8/12 mx-auto text-center">
      <h2 className="px-5 pt-5 text-2xl">
        Ready to hit the greens? Let&apos;s make today a great round!
      </h2>
      <div className="content flex gap-5 p-5">
        <div className="playerInfo w-1/3 bg-white flex flex-col gap-y-4 p-8">
          <p className="left-100">
            {user.firstName} {user.lastName}
          </p>
          <p>Player&apos;s Handicap : {user.handicap}</p>
          <p>Average Score</p>
        </div>
        <div className="gameInfo flex flex-col gap-y-3 w-2/3">
          <div className="lastGame bg-white p-4">
            <div className="flex justify-between">
              <h3 className="l-1/2 text-xl text-left">Last Game</h3>
              <p className="text-xl">Oitavos Dunes</p>
            </div>

            <p>Score </p>
            <p>Something else</p>
          </div>
          <button className="btn text-3xl bg-white p-4"> New Game</button>
        </div>
      </div>
    </div>
  );
}
