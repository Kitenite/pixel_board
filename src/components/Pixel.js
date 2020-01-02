import React from 'react';

class Pixel extends React.Component {
	setColor(value){
		if(value == 0){
			return 'white'
		}
		return 'black'
	}
	render(){
		return (
			<button className="pixel" style={{background:this.setColor(this.props.value)}} onMouseEnter={() => this.props.onClick(this.props.row,this.props.column)}>
			</button>
		)
	}
}

export default Pixel;
