import React from 'react'

function myalert() {
  const myStyle = {
    color: 'red'
  }
  return (
    <div>
      <h6 style={myStyle}>Hey, you forgot to enter a to-do item!</h6>
    </div>
  )
}

export default myalert
