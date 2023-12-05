import { useMutation, useQuery } from "react-query"
import { useLocation } from "react-router-dom"
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa"
import { MdLocationPin, MdMeetingRoom } from "react-icons/md"
import Map from "../../components/map/Map";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthCheck from "../../hooks/useAuthCheck";
import BookingModal from "../../components/bookingModal/BookingModal";
import "./property.css"
import UserDetailContext from "../../context/userDetailContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/heart/Heart";

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
  const { pathname } = useLocation();
  // http://127.0.0.1:5173/properties/648a1ed5d52203e45f037608
  const id = pathname.split("/").slice(-1)[0];
  // custom hooks
  const { data, isError, isLoading } = useQuery(["resd", id], () => getProperty(id));
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailContext);
  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter(booking => booking.id !== id)
      }));
      toast.success("Your booking is cancelled!");
    }
  });


  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
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
    <div className="wrapper">
      <div className='flexColStart paddings innerWidth property-container'>
        {/** like button */}
        <div className="like">
          <Heart id={id} />
        </div>

        {/** image */}
        <img src={data?.image} alt="home image" />

        <div className="flexCenter property-details">
          {/** left */}
          <div className="flexColStart left">
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: '1.5rem' }}>${data?.price}</span>
            </div>

            <div className="flexStart facilities">
              {/** Bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/** Parkings */}
              <div className="flexStart facility">
                <MdLocationPin size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} Parkings</span>
              </div>

              {/** Rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Rooms</span>
              </div>
            </div>

            <span className="secondaryText" style={{ textAlign: "justify" }}>{data?.description}</span>
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address} {data?.city} {data?.country}
              </span>
            </div>
            {
              bookings?.map(booking => booking.id).includes(id) ?
                <>
                  <Button variant="outline" w={"100%"} color="red" onClick={() => cancelBooking()} disabled={cancelling}>
                    <span>Cancel booking</span>
                  </Button>
                  <span>
                    Your visit already booked for date {bookings?.filter(booking => booking?.id === id)[0].date}
                  </span>
                </>

                : (
                  <button className="button"
                    onClick={() => { validateLogin() && setModalOpened(true) }}
                  >
                    Book your visit
                  </button>
                )
            }

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />
          </div>
          {/** right */}
          <div className="map">
            {/** custom map component */}
            <Map address={data?.address} city={data?.city} country={data?.country} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Property