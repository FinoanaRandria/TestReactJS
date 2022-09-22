import React from "react";

const Car = (props) => {
   /* props premet de recuperer les composants de lasa objects */

   const CondColor = props.Color ? (<p >Couleur:{props.Color}</p>) : (<p>Couleur:Aucun</p>)

   if (props.children != null) {
      return (/* jsx a besoin d'un elment parent izay mahatonga any le div eo */
         <div style={{ backgroundColor: "	#00FFFF", width: '400px', margin: "5px auto", padding: "10px" }}>
            <p>Marque:{props.children}</p>
            {CondColor}
            {/* {}permet d'introduire du code js dans du jsx */}
         </div>

      )
   } else {
      return (
         <div style={{ backgroundColor: "red", width: '400px', margin: "5px auto", padding: "10px" }}>
            <p>Aucun data</p>
         </div>


      )
   }/* fonction miretoune zavtr faona */


}

export default Car;