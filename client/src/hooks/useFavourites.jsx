import { useContext, useEffect, useRef } from "react"
import UserDetailContext from "../context/userDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllfav } from "../utils/api.js";

const useFavourites = () => {

  const {userDetails, setUserDetails} = useContext(UserDetailContext);
  const querRef = useRef();
  const {user} = useAuth0();

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: "allFavorites",
    queryFn: () => getAllfav(user?.email, userDetails?.token),
    onSuccess: (data) => 
      setUserDetails(prev =>({...prev, favourites: data})),
    enabled: user !== undefined,
    staleTime: 30000
  });

  // Update the value without re-rendering
  querRef.current = refetch;

  useEffect(() => {
    querRef.current && querRef.current();
  }, [userDetails?.token]);

  return {data, isLoading, isError,refetch }
}

export default useFavourites
