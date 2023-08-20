import React from "react";
import Navbar from "./Component/Navbar";
import AboutMe from "./Component/AboutMe";
import Section from "./Component/Section";
import sectionData from"./Datas/sectionData";
import Footer from "./Component/Footer";

import "./style.css"
// console.log (sectionData)
const App=()=>{
    return(
        <div>
            <Navbar/>
            <AboutMe/>
            {sectionData.map((value)=>(
                <Section title={value.title} des= {value.des}/>
            )
            )
            }
            <Footer/>
        </div>
    )
}
export default App
// in Jsx 
// if else => ternary operator 
// loops => map, filter, reduce => higher order function
