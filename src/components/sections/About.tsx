import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { download, Resume } from "../../assets";

interface IServiceCard {
	index: number;
	title: string;
	icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
	<Tilt
		glareEnable
		tiltEnable
		tiltMaxAngleX={30}
		tiltMaxAngleY={30}
		glareColor="#aaa6c3"
	>
		<div className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
			>
				<div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
					<img
						src={icon}
						alt="web-development"
						className="h-16 w-16 object-contain"
					/>

					<h3 className="text-center text-[20px] font-bold text-white">
						{title}
					</h3>
				</div>
			</motion.div>
		</div>
	</Tilt>
);

const About = () => {
	// View-Download Resume
	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = Resume;
		link.download = "Akash_Soni_Resume.pdf";

		window.open(Resume, "_blank");
		setTimeout(() => {
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}, 5000);
	};

	return (
		<>
			<Header useMotion={true} {...config.sections.about} />

			<div className="flex flex-col lg:flex-row justify-between items-start">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
				>
					{config.sections.about.content}
				</motion.p>
				{/* Resume */}
				<button
					onClick={downloadResume}
					className="relative bg-[#915EFF] text-[#F0FFFF] font-bold text-xl px-4 py-2 rounded-md w-fit flex items-center gap-4 my-10 h-10 hover:scale-110 overflow-hidden group"
				>
					<span className="relative z-10">Resume</span>
					<img className="h-5 w-5 relative z-10" src={download} alt="Download Resume" />
					{/* Shiny Effect */}
					<span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4E8E2] to-transparent transform -translate-x-full rotate-45 transition-transform duration-700 group-hover:translate-x-full ease-in-out"></span>
				</button>
			</div>

			<motion.div
				variants={fadeIn("down", "spring", 1, 1)}
				className="text-secondary mt-6 max-w-3xl text-[17px] leading-[30px]"
			>
				<h2 className="font-black text-white lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">GitHub Activity.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("right", "spring", 1, 1)}
				className="relative z-10 mt-14 flex flex-col overflow-hidden group"
			>
				<GitHubCalendar
					username="akash2061"
					theme={{
						light: ['#151a22', '#004929', '#007631', '#00b53e', '#00e54f'],
						dark: ['#151a22', '#004929', '#007631', '#00b53e', '#00e54f'],
					}}
				/>
				<span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4E8E2] to-transparent transform -translate-x-full rotate-45 transition-transform duration-500 group-hover:translate-x-full ease-in-out"></span>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");