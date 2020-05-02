import React from "react";


const Scroll = (props) =>{

	return (
   <div style ={{border:"3px solid #fff",overflowY:"scroll",height:"800px"}}>
	{props.children}
	</div>

	)
}
export default Scroll;