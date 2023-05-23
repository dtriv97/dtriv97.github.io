import React from 'react';
import { useState } from 'react';
import './Skills.css';

const SkillStates = [
    {
        "title" : "Embedded Systems",
        "body" : "Lorem IPSUM - Embedded Sys"
    },
    {
        "title" : "Web & Mobile App",
        "body" : "Lorem Ipsum - Web"
    },
    {
        "title" : "Data Analytics",
        "body" : "Lorem Ipsum - Data"
    }
]

function Skills() {
    const [sState, setSkill] = useState(SkillStates[0])
    return (
        <div className='outer-container'>
            {
                SkillStates.map((item, index) => {
                    return (
                        <div className={item === sState ? "cardTab selected" : "cardTab"} onClick={() => setSkill(SkillStates[index])}>
                            <p>{item["title"]}</p>
                        </div>
                    );
                })
            }
            <div className="cardContainer">
                <div className="cardGraphic">
                    <img src="https://www.svgrepo.com/show/198478/circuit-board-microchip.svg" />
                </div>
                <div className="cardInfo">
                    <p>{sState["body"]}</p>
                </div>
            </div>
        </div>
    )
};

export default Skills;
