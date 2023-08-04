import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

const Page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default Page;
