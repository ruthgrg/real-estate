import {useState, useContext, useEffect} from "react"
import {AiFillHeart} from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/userDetailContext";
import { updateFavourites, checkFavourites } from "../../utils/common";
import { toFav } from "../../utils/api";

const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState("white");
    const{validateLogin} = useAuthCheck();
    const{user} = useAuth0();
    const {userDetails: {favourites, token}, setUserDetails} = useContext(UserDetailContext);
    
    const {mutate} = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => setUserDetails(prev => ({
            ...prev,
            favourites: updateFavourites(id, favourites)
        }))
    });

    const handleLike = () => {
        if(validateLogin()) {
            mutate();
            setHeartColor(prev => prev === "#fa3e5f" ? "white" : "#fa3e5f" );
        }
    }

    useEffect(() => {
        setHeartColor(checkFavourites(id, favourites));
    },[favourites]);

  return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation();
            handleLike();
        }}/>
  )
}

export default Heart