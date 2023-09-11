import { useContext, useRef, useEffect } from "react"
import UserDetailContext from "../context/userDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import {getAllBookings} from "../utils/api.js"


const useBookings = () => {

    const {userDetails, setUserDetails} = useContext(UserDetailContext);
    const {user} = useAuth0();
    const querRef = useRef();

    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: "allBookings",
        queryFn: () => getAllBookings(user?.email, userDetails?.token),
        onSuccess: (data) => setUserDetails(prev => ({...prev, bookings: data })),
        enabled: user !== undefined,
        staleTime: 30000
    });

    querRef.current = refetch;

    useEffect(() => {
        querRef.current && querRef.current();
    }, [userDetails?.token]);

  return {data, isLoading, isError, refetch}
}

export default useBookings