import React from 'react';
import Pixel from './Pixel';

class Board extends React.Component {
  renderPixels(pixel, row, column) {
    return <Pixel value={pixel} row={row} column={column} onClick={(row, column) => this.props.onClick(row, column)}/>;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.props.matrix.map((row, row_index) => (
            <div key={row_index}>
              {row.map((value, col_index) => (
                  this.renderPixels(value,row_index,col_index)
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Board;
