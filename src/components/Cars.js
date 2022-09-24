import React from "react";

const Car = (props) => {
   /* props premet de recuperer les composants de lasa objects */

   const CondColor = props.color ? (<p style={{backgroundColor: "pink"}} >Couleur:{props.color}</p>) : (<p>Couleur:Aucun</p>)
   const style = {
      wrapper : { 
         backgroundColor: "#00FFFF"
         , width: '400px',
          margin: "5px auto", 
          padding: "10px" }
   }
   if (props.nom != null) {
      return (/* jsx a besoin d'un element parent izay mahatonga any le div eo */
         <div style={style.wrapper}>
            <p>Marque:{props.nom}</p>
            {CondColor}
            {/* {}permet d'introduire du code js dans du jsx */}
            <p>Date de sortie:{props.date}</p>
         </div>
            
      )
   } else {
      return ( null
      )
   }/* fonction miretoune zavtr faona */


}

export default Car;