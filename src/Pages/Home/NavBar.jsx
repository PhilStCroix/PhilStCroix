import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 5008) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive} ? "active" : ""`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
    </nav>
  );
}

export default NavBar;
