import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

const Page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  );
};

export default Page;
