import React from 'react';
import './module.style.scss'

const Totals = ({ price }) => (
    <div className="menu-item">
        
        <span className='subtitle col-1'> {price}</span>
        
    </div> 
)

export default Totals