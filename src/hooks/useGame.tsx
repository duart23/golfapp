import { setGames } from "@/redux/user/gameSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function useFetchGame(userId: number) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userId) return; 
      
        const fetchGameData = async () => {
          try {
            console.log("Fetching game data for user:", userId);
            const res = await fetch(`/api/game?userId=${userId}`);
            if (!res.ok) throw new Error("Failed to fetch user");
            const data = await res.json();
            dispatch(setGames(data));
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        };
      
        fetchGameData();
      }, [userId])
}
