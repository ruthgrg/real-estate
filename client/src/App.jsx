import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Website from "./pages/Website";
import Layout from "./components/layout/Layout";
import Properties from "./pages/properties/Properties";
import Property from "./pages/property/Property";
import {QueryClient, QueryClientProvider} from "react-query"
// import { ReactQueryDevtools } from "react-query-devtools";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  // Instance of our client
  const queryClient = new QueryClient();
  return (
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
  );
}

export default App;