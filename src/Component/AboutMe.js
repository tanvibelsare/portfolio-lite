
import React from "react";
//if you add image directly you need to import it if you directly copy link not need to import it
// import picture from "../images/pic1.jpeg"
// const picture = require("../images/pic1.jpeg")
const AboutMe=()=>{
   return(
       <div class="AboutMe">
           <h1>About Me</h1>
           <img src={ require("../images/pic1.jpeg")} alt="cute girl"/>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       </div>
   )
}
export default AboutMe