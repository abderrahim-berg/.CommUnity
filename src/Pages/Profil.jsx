import React from 'react'
import Aside from '../Components/Aside'
import "react-pro-sidebar/dist/css/styles.css";
import Feed from '../Components/Feed'
import Footer from '../Components/Footer';
function Profil() {
  return (
    <>
    <Aside/>
    <Feed isStudent={false}/>
    
    </>
  )
}
export default Profil
