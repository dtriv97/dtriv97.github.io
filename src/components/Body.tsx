// import HomeImage from "../assets/profile-photo.png";
import "./Body.css";
import Skills from "./Skills";

export default function Body() {
	const jobItems = [
		{
			name: "Product Development Engineer",
			organisation: "Fisher & Paykel Healthcare - Surgical Operations Team",
			duration: "Nov 2022 - Present",
			description:
				"Software development on key product using C/C++ and testing/analysis with Python and C# scripting",
		},
		{
			name: "Product Development Engineer",
			organisation:
				"Fisher & Paykel Appliances - Refrigeration & Connected Software",
			duration: "Jan 2020 - Nov 2022",
			description:
				"Embedded software development working on key projects in refrigeration team, using bare-metal embedded C and testing with Python",
		},
		{
			name: "Software Engineer (Intern)",
			organisation: "LeapThought NZ - Software Development Team",
			duration: "Nov 2018 - Feb 2019",
			description:
				"App Development using React Native. Front-End development using React JS",
		},
	];

	return (
		<div className="body-container">
			<div className="body-section home-container">
				<div className="topline-container">
					<p> Software Development </p>
					<p className="break"> | </p>
					<p> Data & Analytics </p>
					<p className="break"> | </p>
					<p> Landscape Photography </p>
				</div>
				<div className="img-container">
					{/* <img src={HomeImage} className="home-profile" alt="Home_Image"/> */}
				</div>
				<div className="blurb-container">
					<p>"Hi, Im"</p>
					<p className="name-para">"DHAIRYA TRIVEDI"</p>
				</div>
			</div>
			<div className="body-section about-container">
				<div className="about-statement">
					<p>
						I am a software engineer with extensive experience in embedded, web,
						and app development, as well as testing and analysis, working in a
						wide variety of teams and applications. Aside from professional
						work, my personal interests are in photography and editing which
						allows me to visually express my thoughts.
					</p>
				</div>
				{/* <JobTimeline className='jobTimeline' jobs={jobItems}/> */}
			</div>
			<div className="body-section skills-container">
				<Skills />
			</div>
		</div>
	);
}
