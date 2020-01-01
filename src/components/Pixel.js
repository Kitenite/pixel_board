import React from 'react';

function Pixel(props){
		return (
			<button className="pixel" onClick={() => props.onClick()}>
			   {props.value}
			</button>
		)
}

export default Pixel;
