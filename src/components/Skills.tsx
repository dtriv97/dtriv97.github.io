import { useState } from 'react';
import './Skills.css';

interface SkillType {
    title: string
    img: string
    body: string
    tools?: string
}

const SkillStates: SkillType[] = [
    {
        title : "Embedded Systems",
        img : "https://www.svgrepo.com/show/198478/circuit-board-microchip.svg",
        body : "With 3+ years of experience in embedded software, I possess a diverse skill set ranging from \
            bare-metal code to RTOSes. I excel in testing and validation using blackbox and greybox methods \
            through automated setups. I am highly collaborative, understanding project requirements and \
            delivering high-quality solutions within deadlines. My passion for embedded systems, combined \
            with problem-solving abilities, allows me to efficiently tackle complex challenges.",
        tools : "Embedded C/C++, Python, Arduino, RaspberryPi, FreeRTOS"
    },
    {
        title: "Web & Mobile App",
        img: "https://www.svgrepo.com/show/520234/whatsappwebtogo.svg",
        body : "Lorem Ipsum - Web"
    },
    {
        title : "Data Analytics",
        img : "https://www.svgrepo.com/show/500529/data-line.svg",
        body : "Lorem Ipsum - Data"
    }
]

export default function Skills() {
    const [sState, setSkill] = useState(SkillStates[0])

    const skillIcon = (link:string) => (
        <img src={link} alt='skillImage'/>
    )

    return (
        <div className='outer-container'>
            {SkillStates.map((item, idx) => {
                    return (
                        <div className={item === sState ? "cardTab selected" : "cardTab"} onClick={() => setSkill(SkillStates[idx])}>
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
                    {skillIcon(sState['img'])}
                </div>
            </div>
        </div>
    )
};
