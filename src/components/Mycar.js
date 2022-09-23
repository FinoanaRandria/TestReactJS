import React, { Children, Component } from "react";
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
     ajout10 = ()=>{
      const update =this.state.voiture.map((pram)=>{
         return pram.date +10
      })/* la nouveau state */
     }

  state = {
    voiture: [
      { nom: "renault", color: "skyblue", date: 2023 },
      { nom: "nissan", color: "pink", date: 2022},
      { nom: "toyota", color: "white", date: 2024},
    ],
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* onMouseOver={this.addStyle} */}
        <p onCopy={this.noCopy}>
          saluttttttttttttttttttttttttttt ne me copie pas
        </p>
        {/* props permet de recuperer les element dans un parents sous forme  objects */}
        <Car
          Color={this.state.voiture[0].color}
          date={this.state.voiture[0].date}
        >
          {this.state.voiture[0].nom}
        </Car>
        {/* peuvent aussi prendre des parametres ex color eto */}
        {/* peuvent encore contenir des elements enfants */}
        <Car
          Color={this.state.voiture[1].color}
          date={this.state.voiture[1].date}
        >
          {this.state.voiture[1].nom}
        </Car>
        <Car
          Color={this.state.voiture[2].color}
          date={this.state.voiture[2].date}
        >
          {this.state.voiture[2].nom}
        </Car>
        <button  onClick={this.ajout10}>+10</button>
      </div>
    );
  }
}

export default Mycar;
/* creation composant enfant */
