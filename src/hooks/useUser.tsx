import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";

export function useFetchUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user"); 
        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        dispatch(setUser(data));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);
}
