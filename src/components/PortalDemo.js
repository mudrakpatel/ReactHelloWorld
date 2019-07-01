import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PortalNodeH1 from './PortalNodeH1';

function PortalDemo(){
  const [buttonTitle, setButtonTitle] = useState("Show Portal");
  const [display, setDisplay] = useState("");
  var portalH1Styles = {
    display: display
  };
  
  let togglePortal = () => {
    if(buttonTitle === "Show Portal"){
      setButtonTitle("Hide Portal");
      //console.log(display);
      setDisplay("none");
    } else {
      setButtonTitle("Show Portal");
      setDisplay("block");
    }
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <PortalNodeH1 id="portal-h1" style={portalH1Styles}/>
      <button onClick={togglePortal}>{buttonTitle}</button>
    </React.Fragment>
  , document.getElementById("portal-root"))
}

export default PortalDemo;
