import React, { useState } from "react";
import "../styles/AppNavbar.css"; 
import appIcon from "../styles/appIcon.jpg"; 

function AppNavbar() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="app-navbar"> 
      <div className="app-navbar-left"> 
        <img src={appIcon} alt="SpaceX" /> 
      </div>
    
        
    
    
    </nav>
  );
}

export default AppNavbar; 
