import React, { useState } from 'react'
import Table from './Table'





function App() {

  const items = [
    {
      id: 1,
      name: 'umejiburu Akachukwu',
      scores: 2005,
      attendance: 20,
     descripion: 'good score'
    },
   {
    id: 2,
    name: 'Eric Ferris',
    scores: 1445,
    attendance: 70,
    descripion: 'good score'
  }, 
  {
    id: 3,
    name: 'michele Cassilo',
    scores: 1285,
    attendance: 50,
    descripion: 'good score'
  },
  {
    id: 4,
  
    name: 'kim presh',
    scores: 1234,
    attendance: 100,
    descripion: 'good score'
  }

  ]

  const columns = [
    {field: 'id', header: '#'},
    {field: 'name', header: 'name'},
    {field: 'scores', header: 'scores'},
    {field: 'attendance', header: 'attendance'},
    {field: 'descripion', header: 'description'}
  ]

  

  return (
    <div className="App">
     <Table 
     items={items}
     columns={columns}
     />
    </div>
  )
}

export default App
