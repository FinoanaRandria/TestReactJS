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
  ajout10 = () => {
    const update = this.state.voiture.map((pram) => {
      return pram.date -= 10; /* ici la date sera modifier via <<map>> qui va modifer la valeur de date dans le tableau voiture */
    }); /* la nouveau state */

    this.setState({
       update
    });
  };

  state = {
    voiture: [
      { nom: "renault", color: "skyblue", date: 2000 },
      { nom: "nissan", color: "pink", date: 1903 },
      { nom: "toyota", color: "white", date: 1987 },
    ],
    titra:"Mon titre 2"
  };
  render() {
      const date = new Date().getFullYear();
    return (
      <div>   {/* azo atao tsara no mifampy passe zavtr @ react via props xd */}
        <h1>{this.props.titre}</h1>
        {/* onMouseOver={this.addStyle} */}
        <p onCopy={this.noCopy}>
          saluttttttttttttttttttttttttttt ne me copie pas
        </p>
        {/* props permet de recuperer les element dans un parents sous forme  objects */}
       
        {/* peuvent aussi prendre des parametres ex color eto */}
        {/* peuvent encore contenir des elements enfants */}
       
        <button onClick={this.ajout10}>+10</button>
              { this.state.voiture.map((voiture,index)=>{
                  return(
                    <div key={index}>
                          <Car nom={voiture.nom}  color={voiture.color} date={voiture.date + " ans"} />

                    </div>
                      //key premet  a react  d'identifier un element comme un id????:) 
                    
                  )
              })}
      </div>
    );
  }
}

export default Mycar;
/* creation composant enfant */
