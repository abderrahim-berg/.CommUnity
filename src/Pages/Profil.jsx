import React from 'react'
import Aside from '../Components/Aside'
import "react-pro-sidebar/dist/css/styles.css";
import Feed from '../Components/Feed';
import { useState } from 'react';
import ShowPost from '../Components/ShowPost';
  
function Profil() {
 
  return (
    <>
    <Aside/>
    <Feed type={true}/>
   
    </>
  )
}
export default Profil
