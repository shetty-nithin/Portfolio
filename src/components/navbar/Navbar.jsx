import React, { useEffect, useState } from 'react';
import './navbar.scss';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { BsMenuButtonWideFill } from 'react-icons/bs'

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	const toggleNavbar = () => {
		const element = document.querySelector('.right');
		const currZIndex = parseInt(element.style.zIndex);
		if(currZIndex === 999){
			element.style.zIndex = '-1';
		}
		else{
			element.style.zIndex = '999';
		}	
	}
	const hideNavbar = () => {
		const element = document.querySelector('.right');
		element.style.zIndex = '-1';
	}

	return (
		<div id='navbar' className="navbar container">
			<div className="left">
				<div className="vertical"></div>
				<div className="diagonal"></div>
			</div>
			{windowWidth < 1000 
				? 	<>
						<BsMenuButtonWideFill size={24} onClick={toggleNavbar}/>
						<div className="right">
							<div onClick={hideNavbar}><a href="#aboutSection">About</a></div>
							<div onClick={hideNavbar}><a href="#projectSection">Project</a></div>
							<div onClick={hideNavbar}><a href="#experienceSection">Experience</a></div>
							<div onClick={hideNavbar}><a href="#contactSection">Contact</a></div>
						</div>
					</>
				:
				 	<>
						<div className="right">
							<div><a href="#aboutSection">About</a></div>
							<div><a href="#projectSection">Project</a></div>
							<div><a href="#experienceSection">Experience</a></div>
							<div><a href="#contactSection">Contact</a></div>
						</div>
				 	</>
			}
		</div>
	);
};

export default Navbar;