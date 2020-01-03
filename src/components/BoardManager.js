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
      pixelMatrix: matrix,
      isDown: false
    }
  };

  createEmptyMatrix(){
    const columnLength = 100;
    const rowLength = 100;
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
    if (!this.state.isDown){return}
    //change pixel value to 1
    const newMatrix = this.state.pixelMatrix;
    newMatrix[row][column] = 1;
    if (row-1 >=0){
      newMatrix[row-1][column] = 1
      if (column-1 >=0){
          newMatrix[row-1][column-1] = 1
          newMatrix[row][column-1] = 1
      }
    }
    console.log(row,column);
    // update(this.state.pixelMatrix, {row: {$set: 1}});
    // this.setState({
    //   pixelMatrix: newMatrix
    // })
  }

  getSurroundingElements(x, y) {
    let matrix = this.state.pixelMatrix;
    var x_limit = matrix.length;
    if (x_limit == 0) return null; //matrix is empty

    var y_limit = matrix[0].length; //Assumes all rows in the matrix are of same length (otherwise, not a matrix, right?)

    return {
      'tl':((x-1 >= 0 && y-1 >= 0)?matrix[x-1][y-1]:null),
      'tc':((y-1 >= 0)?matrix[x][y-1]:null),
      'tr':((x+1 < x_limit && y-1 >= 0)?matrix[x+1][y-1]:null),

      'ml':((x-1 >= 0)?matrix[x-1][y]:null),
      'mr':((x+1 < x_limit)?matrix[x+1][y]:null),

      'bl':((x-1 >= 0 && y+1 < y_limit)?matrix[x-1][y+1]:null),
      'bc':((y+1 < y_limit)?matrix[x][y+1]:null),
      'br':((x+1 < x_limit && y+1 < y_limit)?matrix[x+1][y+1]:null)
    };
  }

  toggleHold(e){
    let newDown = !this.state.isDown
    this.setState({
        isDown: newDown
    })
  }

  renderBoard(){
    return <Board matrix={this.state.pixelMatrix}
    onMouseEnter={(row,column)=>this.drawing(row,column)}
    onMouseDown={e => this.toggleHold(e)}
    onMouseUp={e => this.toggleHold(e)}/>
  }

  render(){
    return (
      <div className="board-manager">
        <div className="board">
          {this.renderBoard()}
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
