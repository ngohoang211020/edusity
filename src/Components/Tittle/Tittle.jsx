import './Tittle.css';
import React from "react";

const Tittle = ({subTittle,tittle}) => {
    return (
        <div className='tittle'>
            <p>{subTittle}</p>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Tittle;