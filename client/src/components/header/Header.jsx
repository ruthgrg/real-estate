import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../profileMenu/ProfileMenu.jsx"

import "./header.css";
import AddPropertyModal from "../addPropertyModal/AddPropertyModal.jsx";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // Hook from auth0: Pre-build mechanism from the auth0
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [addPropertyOpened, setAddPropertyOpened] = useState(false);
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setAddPropertyOpened(true);
    }
  }

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
      return { right: menuOpened && "4rem" }
  }

  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>
        {/** Hamburger menu */}
        <OutsideClickHandler
          onOutsideClick={() => setMenuOpened(false)}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)} >
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:max@muster.com">Contact us</a>

            {/** Add properties */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModal
              opened={addPropertyOpened}
              setOpened={setAddPropertyOpened}
            />
            {/** Login button */}
            {
              !isAuthenticated ?

                <button className="button" onClick={loginWithRedirect}>
                  <a href="">Login</a>
                </button>

                :

                <ProfileMenu
                  user={user}
                  logout={logout}
                />
            }

          </div>
          <div className={`menu-icon`} onClick={() => {
            setMenuOpened(prevState => !prevState)
          }}>
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>

      </div>
    </section>
  )
}

export default Header