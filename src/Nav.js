import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        // src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        src="https://fontmeme.com/images/netflix-new-logo.png"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
