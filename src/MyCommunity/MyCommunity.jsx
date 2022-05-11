import Aside from '../Components/Aside'
import "react-pro-sidebar/dist/css/styles.css";
import Feed from "./Feed"
import "./styles/MyCommunity.css"




function MyCommunity() {

  


    return (
    <>
      <div className='Container'>
          
          <div className="side"><Aside /></div>
          <div className='Feed'><Feed /></div>
      </div>
    </>  
)

}

export default MyCommunity;
