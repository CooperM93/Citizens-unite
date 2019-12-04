import React from 'react';
import './styles/transitionStyles.css';

function Transition ({children}){
    return(
        <div className='transition-container'>
            <section className='item'>
                {children}
            </section>
        </div>
    )
}

export default Transition