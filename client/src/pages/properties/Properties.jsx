import "./properties.css"
import SearchBar from '../../components/searchBar/SearchBar'
import useProperties from "../../hooks/UseProperties";

const Properties = () => {
  //custom hook
  const {data, isError, isLoading} = useProperties();
  console.log(data)

  return (
    <div className='wrapper'>
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar/>
      </div>
    </div>
  )
}

export default Properties