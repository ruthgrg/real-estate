import { Suspense} from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Website from "./pages/Website";
import Layout from "./components/layout/Layout";
import Properties from "./pages/properties/Properties";
import Property from "./pages/property/Property";

// QueryClient: A query client type is how a client performing a query tells the system what type of client it is. For example, a client might tell us it is UI, or an automated query. 
// Query throttling monitors the use of resources and protects the search system.
// QueryClientProvider: The QueryClientProvider uses React Context to 
// distribute the QueryClient throughout the entire application
import {QueryClient, QueryClientProvider} from "react-query"
// import { ReactQueryDevtools } from "react-query-devtools";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserDetailContext from "./context/userDetailContext";

function App() {
  // Instance of our client
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  });
  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
      {/* UserSetailContext.Provider ensure that user is available in whole app */}
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Website/>}/>
                <Route path="/properties" >
                  {/** index means default path of the /Properties path */}
                  <Route index element={<Properties/>}/>
                  <Route path=":propertyId" element={<Property/>}/>
                </Route>
              </Route>
            </Routes> 
          </Suspense>
        </BrowserRouter>
        <ToastContainer/>
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;