import React, { useState } from "react";
import "../styles/AppSearch.css"; 

function AppSearchFilter({ onSearch }) { 
  const [searchFilters, setSearchFilters] = useState({
    original_launch: "",
    status: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    onSearch(searchFilters);
  };

  return (
    <div className="app-filter"> 
      <div className="app-contain"> 
        <h2 className="text-center mt-4">Search Filters</h2>
        <div className="d-flex flex-md-row flex-column justify-content-center gap-5 my-4 mx-auto align-items-center justify-content-center">

        <div className="app-top-row  d-flex   flex-md-row flex-column gap-md-0 gap-4"> 
        
          <input
          className="mx-3"
            type="text"
            name="status"
            placeholder="Search by Status"
            value={searchFilters.status}
            onChange={handleChange}
          />
          <input
            type="text"
          className="mx-3"

            name="original_launch"
            placeholder="Search by original_launch"
            value={searchFilters.original_launch}
            onChange={handleChange}
          />
          <input
            type="text"
          className="mx-3"

            name="type"
            placeholder="Search by Type"
            value={searchFilters.type}
            onChange={handleChange}
          />
        </div>
        <div className="app-bottom-row button-54"> 
  
<button class="button-57" role="button"  onClick={handleSearch}><span class="text">Search</span><span>Click me!!!</span></button>
        </div>
        </div>

      </div>
    </div>
  );
}

export default AppSearchFilter;
