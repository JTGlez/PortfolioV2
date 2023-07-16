import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Loader from './Loader';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';
import Submit from './Submit';
import './assets/css/reset.css'
import './assets/css/normalize.css'
import './assets/css/loader.css'
import './assets/css/headbar.css'
import './assets/css/navbar.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact'; // Importa tu componente Contact aquí

const skillsData = [
  {img: '../src/assets/img/python.png', title: 'Python', subtitle: 'Numpy, Pandas, Scikit, Dash'},
  {img: '../src/assets/img/server.png', title: 'SQL', subtitle: 'PL/SQL, T-SQL'},
  {img: '../src/assets/img/Rlogo.svg', title: 'R', subtitle: 'Tidyverse, Ggplot2'},
  {img: '../src/assets/img/htmlscss.png', title: 'Front-End', subtitle: 'HTML5, CSS3'},
  {img: '../src/assets/img/js.png', title: 'JavaScript', subtitle: 'ReactJS'},

  // Agrega todo el resto de tus habilidades aquí...
];

const educationData = [

  {img: '../src/assets/img/etelogo.png', title: 'ETE UNAM', subtitle: 'Specialized Technical Studies in Computing'},
  {img: '../src/assets/img/inge.png', title: 'School of Engineering', subtitle: 'Degree in Computer Engineering, UNAM'},
  {img: '../src/assets/img/google.png', title: 'Google Career Certificates', subtitle: 'Data Analytics'},
  {img: '../src/assets/img/oracleone.png', title: 'Oracle Next Education', subtitle: 'Front-End'},
  {img: '../src/assets/img/bedu-logo.png', title: 'Bedu', subtitle: 'Data Scientist'},

];

const projectsData = [

  {img: '../src/assets/img/crypto.PNG', title: 'CryptoCypher', subtitle: 'Text Encryptor and Decryptor with Substitution, AES-ECB, and 3DES.', repo: "", demo: ""},
  {img: '../src/assets/img/mining.PNG', title: 'Mining Analytics', subtitle: 'Data Mining platform built with Dash, including EDA and ML Algorithms.', repo: "", demo: ""},
  {img: '../src/assets/img/airline.png', title: 'Study Case: SQL Airlines', subtitle: 'An Oracle DB written in PL/SQL that implements the business logic for an airline.', repo: "", demo: ""}

];

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={
        <>
          <Loader/>
          <NavBar/>
          <AboutMe/>
          <Banner/>
          <Skills skills={skillsData} title = 'Tech Stack'/>
          <Skills skills={educationData} title = 'Professional Education'/>
          <Project projects={projectsData} />
          <Footer/>
        </>
      }/>

      <Route path="contact" element={
        <>
        <Loader/>
        <NavBar/>
        <Contact/>
        <Footer/>
        
        </>

        } />

      <Route path="submit" element={
        <>
        <Loader/>
        <NavBar/>
        <Submit/>
        <Footer/>
        
        </>

        } />

    </Routes>
  </Router>
);