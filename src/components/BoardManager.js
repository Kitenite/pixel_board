import React from 'react';
import Board from './Board';
import update from 'immutability-helper';

// Functions
function clearBoard(){}
function submitDrawing(drawing){}
function handleDrawing(){}

class BoardManager extends React.Component {
  constructor(){
    super();
    let matrix = this.createEmptyMatrix();
    this.state = {
      drawn: false,
      pixelMatrix: matrix
    }
  };

  createEmptyMatrix(){
    const columnLength = 28;
    const rowLength = 28;
    let matrix = Array(rowLength);
    // for (var i = 0; i < columnLength; i++) {
    //   matrix[i] = [];
    // }
    for(let i = 0; i < rowLength; i++) {
      matrix[i] = [];
      for(let j = 0; j < columnLength; j++) {
        matrix[i][j] = 0
      }
    }
    return matrix
  }

  clearBoard(){
    //change all pixel value to 0
    const newMatrix = this.createEmptyMatrix();
    this.setState({
      pixelMatrix: newMatrix
    })
  }

  drawing(row,column){
    //change pixel value to 1
    const newMatrix = this.state.pixelMatrix;
    newMatrix[row][column] = 1;
    // update(this.state.pixelMatrix, {row: {$set: 1}});
    this.setState({
      pixelMatrix: newMatrix
    })
  }

  renderBoard(){
    return <Board matrix={this.state.pixelMatrix} onClick={(row,column)=>this.drawing(row,column)}/>
  }

  render(){
    return (
      <div className="board-manager">
        <div className="board">
          {this.renderBoard(0)}
        </div>
        <div className="buttons">
          <button onClick={()=>this.clearBoard()}>Clear</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
export default BoardManager;
