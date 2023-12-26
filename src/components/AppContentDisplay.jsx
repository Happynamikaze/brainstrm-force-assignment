import React, { useState } from "react";
import "../styles/AppContent.css"; 

function AppContentDisplay({ data }) { 
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="app-main-div"> 
      <h2>Our Missions</h2>
      <div className="app-data-grid">
        {currentItems.map((item) => (
          <div key={item.capsule_serial} className="app-grid-item col-md-3 p-4"> 
            <img 
              src="https://media.istockphoto.com/id/1360144439/photo/space-shuttle-flight-in-deep-space-space-rocket-on-orbit-of-earth-planet-sci-fi-space.jpg?s=612x612&w=0&k=20&c=UxiNgFqSztUljTX6Lm3-w8JcyVgSfyW9AZdOvcvMQ8g="
              alt={item.missions[0]?.name}
            />
            <p>{item.missions[0]?.name}</p>
            <button onClick={() => handleItemClick(item)}>View Details</button>
          </div>
        ))}
      </div>

      <div className="app-pagination"> 
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {selectedItem && (
        <div className="app-popup"> 
          <div className="app-popup-content">
            <span className="app-close pe-2" onClick={closePopup}> 
              &times;
            </span>
            <img className="mt-3"
              src="https://media.istockphoto.com/id/182062885/photo/space-station-in-earth-orbit.jpg?s=612x612&w=0&k=20&c=F_P2YJ3QDbSW2n6dWkh6JNYeQGI1-2q-wOBk9-sw_Xo="
              alt={selectedItem.missions[0]?.name}
            />
            <h3 className="mt-3">Capsule Details</h3>
            <p>Serial: {selectedItem.capsule_serial}</p>
            <p>Status: {selectedItem.status}</p>
            <p>Details: {selectedItem.details || "No details available"}</p>
            <p>Type: {selectedItem.type}</p>
            <p>
              Launch:{" "}
              {selectedItem.original_launch_unix || "No details available"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppContentDisplay; 
