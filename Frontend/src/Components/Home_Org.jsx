import React,{useState} from 'react';
import Header from "./Header"
import Info from "./Personal_Info"
import Projects from './Projects';

const Home_Org = () =>{
  return (
    <>
      <Header/>
      <Info/>
      <Projects/>
    </>
  )  
};

export default Home_Org;