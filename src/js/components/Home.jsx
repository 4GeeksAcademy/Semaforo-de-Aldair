import { useState } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ligthColor, setLightColor] = useState("yellow");


	return (
		<div className="text-center">
            
			<div className="Cable"></div>

				<div className="trafficLight">

					<div className={"light red " + (ligthColor=="red"? "on" : ""  )}onClick={()=>setLightColor("red")}></div>
					<div className={"light yellow " + (ligthColor=="yellow"? "on" : "")} onClick={()=>setLightColor("yellow")}></div>
					<div className={"light  green " + (ligthColor=="green"? "on" : "")} onClick={()=>setLightColor("green")}></div>

				</div>
			
		</div>
	);
};

export default Home;