import React, { useState, useEffect } from "react";
import AppNavBar from "./components/AppNavBar";
import AppBanner from "./components/AppBanner";
import AppSearchFilter from "./components/AppSearchFilter"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContentDisplay from "./components/AppContentDisplay";

function App() {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
        setFilteredData(data);
      });
  }, []);


  const handleFilterChange = (newFilters) => {
    const filtered = apiData.filter((item) => {
      const originalLaunch = new Date(item.original_launch).toDateString();
      return (
        originalLaunch.includes(newFilters.original_launch.toLowerCase()) &&
        item.status.toLowerCase().includes(newFilters.status.toLowerCase()) &&
        item.type.toLowerCase().includes(newFilters.type.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <AppNavBar />
      <AppBanner />
      <AppSearchFilter onSearch={handleFilterChange} />
      <AppContentDisplay data={filteredData} />
    </div>
  );
}

export default App;
