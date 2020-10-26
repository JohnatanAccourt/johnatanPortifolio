import React from 'react';
import '../styles/Badge.css';

export default function Badge({name, desc, logo}){
    return(
        <div className="badge__wrapper">
            <div className="badge__wrapperBadge">
                <img className="badge__badge" src={logo} alt="badge"/>  
            </div>
            <p className="badge__name">{name}</p>
            <p className="badge__desc">{desc}</p>
        </div>
    )
}