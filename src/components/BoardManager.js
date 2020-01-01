import React from 'react';
import Board from './Board';

// Functions
function clearBoard(){}
function submitDrawing(drawing){}
function handleDrawing(){}

class BoardManager extends React.Component {
  constructor(){
    super();
    this.state = {
      drawn: false,
      pixelMatrix: this.createEmptyMatrix()
    }
  };

  createEmptyMatrix(){
    const columnLength = 10;
    const rowLength = 10;
    let matrix = Array(columnLength);
    for(let i = 0; i < columnLength; i++) {
      matrix[i] = Array(rowLength).fill(null);
    }
    return matrix
  }

  renderBoard(){
    return <Board matrix={this.state.pixelMatrix} onClick={(i)=>this.handleClick(i)}/>
  }

  render(){
    return (
      <div className="board-manager">
        <div className="board">
          {this.renderBoard(0)}
        </div>
        <div className="buttons">
          <button>Clear</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
export default BoardManager;
