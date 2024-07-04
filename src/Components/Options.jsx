import React from 'react'

function Options({sortTasks}) {
  return (
    <div style={{ display: 'flex',  gap: '10px'  }}>
      <h6>Sort By:</h6>
      <select placeholder="Sort" name="sort" id="sort" onClick={(e) => sortTasks(e.target.value)}>
        <option value="Newest_First">Newest First</option>
        <option value="Oldest_First">Oldest First</option>
      </select>
    </div>
  )
}

export default Options
