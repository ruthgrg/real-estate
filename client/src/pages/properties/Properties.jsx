import "./properties.css"
import SearchBar from '../../components/searchBar/SearchBar'
import useProperties from "../../hooks/UseProperties";
import {PuffLoader} from "react-spinners"
import PropertyCard from "../../components/propertyCard/PropertyCard";
import { useState } from "react";

const Properties = () => {
  //custom hook
  const {data, isError, isLoading} = useProperties();
  const [filter, setFilter] = useState("");

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
  return (
    <div className='wrapper'>
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar
          filter={filter}
          setFilter={setFilter}
        />
        <div className="paddings flexCenter properties">
          {
            // data.map((card, i) => (<PropertyCard key={i} 
            //     card={card}
            //   />)
              data
              .filter((property) => 
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
    </div>
  )
}

export default Properties