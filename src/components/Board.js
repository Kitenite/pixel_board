import React from 'react';
import Pixel from './Pixel';

class Board extends React.Component {
  renderPixels(pixel, row, column) {
    return <Pixel value={pixel} row={row} column={column}
    onMouseEnter={(row, column) => this.props.onMouseEnter(row, column)}
    onMouseDown={e => this.props.onMouseDown(e)}
    onMouseUp={e => this.props.onMouseUp(e)}/>;
  }

  render() {
    return (
      <div>
        <div>
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
