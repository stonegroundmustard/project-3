import React from 'react';

import "../styles/FilterItem.css"

const FilterItem = ({name, id, isActive, onToggleActive}) =>{

    // Uses the 'onToggleActive' prop function to pass up the Id of the clicked filter
    function handleToggleActive() {
        onToggleActive(id)
    }

    return (
        <div onClick={handleToggleActive} className={`filter-item ${isActive ? "active-filter": ""}`}>
            <div>{name}</div>
            {isActive &&
            <div style={{color: "var(--primary)", fontWeight: "bold"}}>x</div>
            }
        </div>
    )
}
export default FilterItem