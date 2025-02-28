"use client";
import InfoBox from "../components/main page/infoBox";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useFetchUser } from "../../hooks/useUser";


export default function Main() {
  useFetchUser();
  const user = useSelector((state: RootState) => state.user);
  
  return (
    <div className="main">
      <h1>Welcome, {user.firstName}</h1>
      <div className="content">
        <InfoBox user={user}/>
      </div>
    </div>

  );
}
   
