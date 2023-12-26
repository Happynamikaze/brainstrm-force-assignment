import React from "react";
import "../styles/AppBanner.css"; 

const AppBanner = () => { 
  const createFirework = (e) => {
    const firework = document.createElement("div");
    firework.className = "app-firework";
    firework.style.left = e.clientX + "px";
    firework.style.top = e.clientY + "px";
    document.querySelector(".app-banner").appendChild(firework);
    firework.addEventListener("animationend", () => {
      firework.remove();
    });
  };

  return (
    <div className="app-banner" onClick={createFirework}>
      
    </div>
  );
};

export default AppBanner; 
