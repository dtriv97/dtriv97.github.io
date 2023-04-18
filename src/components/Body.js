import React from 'react'
import JobTimeline from './JobTimeline'
import HomeImage from '../assets/home_photo.jpg'
import './Body.css'

function Body() {
    const jobItems = [
        {
            name: "Product Development Engineer",
            organisation: "Fisher & Paykel Healthcare - Surgical Operations Team",
            duration: "Nov 2022 - Present",
            description: "Software development on key product using C/C++ and testing/analysis with Python and C# scripting"
        },
        {
            name: "Product Development Engineer",
            organisation: "Fisher & Paykel Appliances - Refrigeration & Connected Software",
            duration: "Jan 2020 - Nov 2022",
            description: "Embedded software development working on key projects in refrigeration team, using bare-metal embedded C and testing with Python"
        },
        {
            name: "Software Engineer (Intern)",
            organisation: "LeapThought NZ - Software Development Team",
            duration: "Nov 2018 - Feb 2019",
            description: "App Development using React Native. Front-End development using React JS"
        },
    ];

    return (
        <div className='body-container'>
            <div className='body-section home-container'>
                <div className='topline-container'>
                    <p> Software Development </p>
                    <p className='break'> | </p>
                    <p> Data & Analytics </p>
                    <p className='break'> | </p>
                    <p> Landscape Photography </p>
                </div>
                <div className='img-container'>
                    <img src={HomeImage} className="home-profile" alt="Home_Image"/>
                </div>
                <div className='blurb-container'>
                    <p>
                        Hi, I'm
                    </p>
                    <p className='name-para'>
                        DHAIRYA TRIVEDI
                    </p>
                </div>
            </div>
            <div className="body-section about-container">
                <div className='about-statement'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dictum odio, ut tristique quam ullamcorper at. In malesuada iaculis purus ut rutrum. Donec vitae urna ac lacus pellentesque finibus a sed elit. Suspendisse id gravida enim, eu faucibus est. Etiam pellentesque, eros a euismod molestie, quam leo fringilla odio.</p>
                    <JobTimeline jobs={jobItems}/>
                </div>
            </div>
        </div>
    )
};

export default Body;
