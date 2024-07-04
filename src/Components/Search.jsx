import React from 'react';

function Search({ setSearch }) {
  return (
    <div>
      <div className="searchBar" 
      style={{ display: 'flex',
       gap: '10px', justifyContent: 'center',
        alignItems: 'center', border: '1px solid #D0D5DD', 
        padding: '10px', borderRadius: '8px' 
        }}>
        <input 
          type="search" 
          name="search" 
          id="search" 
          placeholder="Search by Task Name..." 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ width: '100%', border: 'none' }} 
        />
        <img src="./src/assets/search.svg" alt="Search" />
      </div>
    </div>
  );
}

export default Search;
