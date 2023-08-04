import React, { useState } from 'react';
import './home.scss';
import Navbar from '../navbar/Navbar';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Home = () => {
	const [githubColor, setGithubColor] = useState('#D3C25F');
	const [linkedInColor, setLinkedInColor] = useState('#D3C25F');
	const [discordColor, setDiscordColor] = useState('#D3C25F');

	const handleChangeColor = (setFunction) => {
		return {
			onMouseEnter: () => setFunction('#FFD700'),
			onMouseLeave: () => setFunction('#CCB434')
		}
	}

	return (
		<div id='homeSection' className='homeSection'>
			<div className='homeArea'>
				<div className="top">
					<Navbar/>
				</div>
				<div className="bottom container">
					<div className="bottomLeft col-lg-2">
						<a href="https://github.com/shetty-nithin"><FaGithub {...handleChangeColor(setGithubColor)} color={githubColor} size={24}/></a>
						<a href="https://www.linkedin.com/in/shetty-nithin/"><FaLinkedin {...handleChangeColor(setLinkedInColor)} color={linkedInColor} size={24}/></a>
						<a href="ittps://www.linkedin.com/in/shetty-nithin/"><FaDiscord {...handleChangeColor(setDiscordColor)} color={discordColor} size={24}/></a>
					</div>
					<div className="bottomRight col-lg-10">
						<div className="text">
							<h3>coding with </h3>
							<span>pa</span>
							<span>ssi</span>
							<span>on</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home; 
