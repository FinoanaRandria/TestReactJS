import React, { Component } from "react";
import Car from "./Cars";
import Footer from "./Footer";
class Mycar extends Component {
  noCopy = () => {
    alert("tu es entrain de me copier");
  };
  
              /* addStyle = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("styed")) {
      e.target.classList.remove("styed");
    } else {
      e.target.classList.add("styed");
    }
  }; */
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* onMouseOver={this.addStyle} */}
        <p onCopy={this.noCopy}>
          saluttttttttttttttttttttttttttt ne me copie pas{" "}
        </p>
        {/* props permet de recuperer les element dans un parents sous forme  objects */}
        <Car Color="red">renault</Car>
        {/* peuvent aussi prendre des parametres ex color eto */}
        {/* peuvent encore contenir des elements enfants */}
        <Car Color="blue"></Car>
        <Car Color="">ford</Car>

         
      </div>
    );
  }
}

export default Mycar;
/* creation composant enfant */
