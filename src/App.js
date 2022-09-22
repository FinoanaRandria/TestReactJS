
import React from 'react';
import './App.css';
import Mycar from './components/Mycar';/* importer le composant enfants */
import Footer from './components/Footer';
   class App extends React.Component {
    state={
    titre:"Mon Cataloge"
    }
     changeTitle =(e)=>{
       this.setState({/* setstate Pemet de modifer le state */
           titre:"Mon Nouveau titre"
       })
    }

     changeTitleViaPara =(titres)=>{
        this.setState({
          titre: titres/* modification du state via parametre */
        })
     }

     changeViaBind=(param)=>{
         this.setState({
          titre: param
         })
     }

      viainput =(e)=>{/* e capture l'evenement de l'element */
        this.setState({titre: e.target.value})
      }
     render(){
                   
          return (

              <div className="App">
                  <Mycar title={this.state.titre}> </Mycar>{/* appeler le composant */}
                    {/* pour envoyer l'element du state dans le props de Mycar */}
                <button onClick={ this.changeTitle} style={{backgroundColor:"skyblue",border:"none",padding:"10px",borderRadius:"50px",color:"white"}}>changer le Nom</button>
                    <br></br>
                    <br></br>
                <button onClick={ ()=>this.changeTitleViaPara('Je suis le titre en para')} style={{backgroundColor:"pink",border:"none",padding:"10px",borderRadius:"50px",color:"white"}}>changer le Nom via Para  </button>
                      <br></br>
                      <br></br>
                 <button style={{backgroundColor:"violet",border:"none",padding:"10px",borderRadius:"50px",color:"white"}} onClick={this.changeViaBind.bind(this,"Le mouveau titre bind")} > Changer Via Bind</button>
                     <input type="text" onChange={this.viainput} value={this.state.titre}></input>
                  <Footer></Footer>
              </div>
            ); 


     }
  
}

export default App;
