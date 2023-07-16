import React, { useState } from 'react';
import './home.scss';
import Navbar from '../navbar/Navbar';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Home = () => {
	const [githubColor, setGithubColor] = useState('#9caf6f');
	const [linkedInColor, setLinkedInColor] = useState('#9caf6f');
	const [discordColor, setDiscordColor] = useState('#9caf6f');

	const handleChangeColor = (setFunction) => {
		return {
			onMouseEnter: () => setFunction('#5c732a'),
			onMouseLeave: () => setFunction('#9caf6f')
		}
	}

	return (
		<div id='homeSection' className='homeSection'>
			<div className='homeArea'>
				<div className="top">
					<Navbar/>
				</div>
				<div className="bottom container">
					<div className="bottomLeft">
						<a href="https://github.com/shetty-nithin"><FaGithub {...handleChangeColor(setGithubColor)} color={githubColor} size={24}/></a>
						<a href="https://www.linkedin.com/in/shetty-nithin/"><FaLinkedin {...handleChangeColor(setLinkedInColor)} color={linkedInColor} size={24}/></a>
						<a href="ittps://www.linkedin.com/in/shetty-nithin/"><FaDiscord {...handleChangeColor(setDiscordColor)} color={discordColor} size={24}/></a>
					</div>
					<div className="bottomRight">
						<div className='photo'>
							<img src="../../photos/saffron_blue.png" alt="nithin's photo" />
							{/* <img src={"./saffron_blue.png"} alt="nithin's photo" /> */}
						</div>
						<div className="text">
							<h3>Coding for </h3>
							<span>PASSION</span>
						</div>
					</div>
				</div>
				<div className="square1"></div>
				<div className="circle1"></div>
				<div className="circle2"></div>
				<div className="circle3"></div>
			</div>
		</div>
	);
};

export default Home; 
