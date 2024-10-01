import React from 'react'
import loading from '../assets/spinner.gif'

function Spinner() {
    return (
        <div style={{width:"100%", height: "75vh", display: "flex", justifyContent:"center", alignItems:"center"}}><img src={loading} alt="Loading" style={{}} /></div>
    )
}

export default Spinner