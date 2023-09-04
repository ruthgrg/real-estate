import { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink} from "react-router-dom";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
      if(document.documentElement.clientWidth <= 800)
        return {right: menuOpened && "4rem"}
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
                  <button className="button"><a href="">Login</a></button>
                  {/* <a href="">Residencies</a>
                  <a href="">Our Value</a>
                  <a href="">Contact us</a>
                  <a href="">Get Started</a> */}
                  {/* <button className="button"><a href="">Contact</a></button> */}
              </div>
              <div className= {`menu-icon`} onClick={() => {
                  setMenuOpened(prevState => !prevState)
              }}>
                <BiMenuAltRight size={30}/>
            </div>
            </OutsideClickHandler>
            
        </div>
   </section>
  )
}

export default Header