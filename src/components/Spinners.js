import React from 'react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'

function Spinners() {
    return (
        <div>
           <BounceLoader loading size={24} color='orange'/>
           <BarLoader loading/>
           <BeatLoader loading/> 
        </div>
    )
}

export default Spinners
