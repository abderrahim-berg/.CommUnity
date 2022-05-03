import React from 'react'
import Aside from '../Components/Aside'
import "react-pro-sidebar/dist/css/styles.css";
import Feed from '../Components/Feed'
function Profil() {
  return (
    <>
    <Aside/>
    <Feed type={true}/>
    </>
  )
}
export default Profil
