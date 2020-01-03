import React from 'react';

class Pixel extends React.Component {

	constructor(props) {
    super(props);
		this.state = {
			selected: this.props.value
		}
  }

	setColor(){
		if(this.state.selected == 0){
			return 'white'
		}
		return 'black'
	}

	onMouseEnter(row, column){
		this.props.onMouseEnter(row, column);
		this.setState({
			selected: 1
		})
	}

	render(){
		return (
			<button className="pixel" style={{background:this.setColor()}}
			onMouseEnter={() => this.onMouseEnter(this.props.row,this.props.column)}
			onMouseDown={e => this.props.onMouseDown(e)}
			onMouseUp={e => this.props.onMouseUp(e)}>
			</button>
		)
	}
}

export default Pixel;
