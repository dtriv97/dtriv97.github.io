import React from 'react';
import './Skills.css';

function testFn() {
    console.log("This was pressed\n");
}

function Skills() {
    return (
        <div className='outer-container'>
            <div className='cardTab' onClick={testFn}>
            </div>
            <div className="cardContainer">
                <div className="cardGraphic">
                    <img src="https://www.svgrepo.com/show/198478/circuit-board-microchip.svg" />
                </div>
                <div className="cardInfo">
                    <p>
                        Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Skills;
