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
			<button className="pixel" style={{background:this.setColor(this.props.value)}}
			onMouseEnter={() => this.props.onMouseEnter(this.props.row,this.props.column)}
			onMouseDown={e => this.props.onMouseDown(e)}
			onMouseUp={e => this.props.onMouseUp(e)}>
			</button>
		)
	}
}

export default Pixel;
