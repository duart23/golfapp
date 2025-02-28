"use client";
import InfoBox from "../components/main page/infoBox";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useFetchUser } from "../../hooks/useUser";
import PreviousGames from "../components/main page/previousGames";
import RandomFact from "../components/main page/randomFact";

export default function Main() {
  useFetchUser();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="main text-center">
      <h1 className="welcome text-3xl p-10 text-blue-400">
        Welcome, {user.firstName}!
      </h1>
      <div className="flex flex-col w-3/4 gap-5 p-5 justify-center mx-auto">
        <div className="content w-full gap-4 flex justify-between">
          <InfoBox user={user} />
          <PreviousGames user={user} />
        </div>
        <div className="content w-full  gap-2 flex">
          <RandomFact />
        </div>
      </div>
    </div>
  );
}
