import React from 'react'
import './Infobar.css'

function Infobar() {
    return (
        <div className="infoBa">
            <div className="leftInnerContainer">
                <img src="onlineIcon" alt="" className="onlineIcon"/>
                <h3>roomName</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={cloaseIcon} alt="close img"/></a>
            </div>
        </div>
    )
}

export default Infobar
