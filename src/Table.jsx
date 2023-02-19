import React from 'react'

function Table({items, columns, sortItem}) {
  const caps =(str) => {
    return str.toUpperCase()
  }

  return (
    <table>

     <thead>
      <tr>
        {columns
        .map( head => <th>{caps(head.header)}</th>)}
      </tr>
     </thead>

     <tbody>
      {items.map((item) => (
        
      <tr>
        {columns
        .map(col => <td>{(item[col.field])}</td>)}
        
        </tr>))}
     
     </tbody>
    </table>
  )
}

export default Table