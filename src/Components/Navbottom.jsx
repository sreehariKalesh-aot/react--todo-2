import React from 'react'
import Search from './Search'
import Options from './Options'
function Navbottom({setSearch ,sortTasks}) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'space-between', alignItems: 'center',margin:"0 auto" ,maxWidth: '1440px'}}>
      <Search setSearch={setSearch}/>
      <Options sortTasks={sortTasks}/>
    </div>
  )
}

export default Navbottom
