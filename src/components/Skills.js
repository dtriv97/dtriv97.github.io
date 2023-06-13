import React from 'react';
import { useState } from 'react';
import './Skills.css';

const SkillStates = [
    {
        "title" : "Embedded Systems",
        "img" : "https://www.svgrepo.com/show/198478/circuit-board-microchip.svg",
        "body" : "Lorem IPSUM - Embedded Sys"
    },
    {
        "title" : "Web & Mobile App",
        "img" : "https://www.svgrepo.com/show/520234/whatsappwebtogo.svg",
        "body" : "Lorem Ipsum - Web"
    },
    {
        "title" : "Data Analytics",
        "img" : "https://www.svgrepo.com/show/500529/data-line.svg",
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
                <div className="cardInfo">
                    <p>{sState["body"]}</p>
                </div>
                <div className="cardGraphic">
                    <img src={sState.img} />
                </div>
            </div>
        </div>
    )
};

export default Skills;
