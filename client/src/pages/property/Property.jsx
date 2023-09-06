import {useQuery} from "react-query"
import {useLocation} from "react-router-dom"
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";

const Property = () => {
    /**
     * The useLocation hook returns the location object from the current URL, 
     * which includes the following:
     * 1. pathname: This is the path of the URL.
     * 2. search: This is the query string (?) included in the URL.
     * 3. hash: This is the result of the hash fragment (#) from the URL.
     * For example, if I have a URL, http://localhost:3000/products/school/?name=bags, 
     * the result from the useLocation object will be the following: 
     * {pathname: ‘/products/school/’, search: ‘?bags’, hash: ‘’, 
     * state: undefined}hash: “”pathname: “/products/school/”
     * search: “?bags”state: undefined}
     * 
     * Please note that the useLocation object will update each time when the URL changes.
     */
    const {pathname} = useLocation();
    // http://127.0.0.1:5173/properties/648a1ed5d52203e45f037608
    const id = pathname.split("/").slice(-1)[0];
    // custom hooks
    const {data, isError, isLoading}  = useQuery(["resd", id], () => getProperty(id));
    console.log(data)
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
    <div className='flexColStart paddings innerwWidth property-container'>
        
    Property</div>
  )
}

export default Property