interface User {
  firstName: string;
  lastName: string;
  handicap: number;
}

export default function PreviousGames({ user }: { user: User }) {
  return (
    <div className="container bg-gray-200 w-4/12 mx-auto text-center">
      <div className="flex flex-col gap-5 p-5">
        <h2 className=" text-2xl"> Previous Games</h2>
        <div className="bg-white p-4">
          <div className="flex justify-between">
            <h3 className="text-xl">Oitavos Dunes</h3>
            <h2 className=" text-xl"> 28/02/2025</h2>
          </div>
          <p>Score: 80/71</p>
        </div>
        <div className="bg-white p-4">
          <div className="flex justify-between">
            <h3 className="text-xl">Oitavos Dunes</h3>
            <h2 className=" text-xl"> 28/02/2025</h2>
          </div>
          <p>Score: 80/71</p>
        </div>
        <div className="bg-white p-4">
          <div className="flex justify-between">
            <h3 className="text-xl">Oitavos Dunes</h3>
            <h2 className=" text-xl"> 28/02/2025</h2>
          </div>
          <p>Score: 80/71</p>
        </div>
      </div>
    </div>
  );
}
