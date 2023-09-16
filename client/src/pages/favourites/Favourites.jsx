import "../properties/Properties.css"
import SearchBar from '../../components/searchBar/SearchBar'
import useProperties from "../../hooks/UseProperties";
import {PuffLoader} from "react-spinners"
import PropertyCard from "../../components/propertyCard/PropertyCard";
import { useContext, useState } from "react";
import UserDetailContext from "../../context/userDetailContext";

const Favourites = () => {
  //custom hook
  const {data, isError, isLoading} = useProperties();
  const [filter, setFilter] = useState("");
  const {userDetails : {bookings}} = useContext(UserDetailContext);

  if(isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if(isLoading) {
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  const getBookedProperties = (data, bookings) => {
    return data.filter(property => bookings.map(booking => booking.id).includes(property.id));
  }

  return (
    <div className='wrapper'>
       {
        bookings.length === 0 
        
        ?

        <div className="flexColCenter paddings innerWidth properties-container">
            <SearchBar
                filter={filter}
                setFilter={setFilter}
            />
            <div className="paddings">
                <div>There is no bookings to display</div>
            </div>
        </div>

        :

        <div className="flexColCenter paddings innerWidth properties-container">
            <SearchBar
            filter={filter}
            setFilter={setFilter}
            />
            <div className="paddings flexCenter properties">
            {
                    getBookedProperties(data, bookings).filter((property) =>
                    property.title.toLowerCase().includes(filter.toLowerCase()) ||
                    property.city.toLowerCase().includes(filter.toLowerCase()) ||
                    property.country.toLowerCase().includes(filter.toLowerCase()))
                .map((card, i) => (<PropertyCard key={i} 
                    card={card}
                />)
                )
            }
            </div>
        </div>

        } 
      
    </div>
  )
}

export default Favourites