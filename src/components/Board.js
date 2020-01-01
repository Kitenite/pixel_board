import React from 'react';
import Pixel from './Pixel';

class Board extends React.Component {
  renderPixels(i) {
    return <Pixel matrix={i} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.props.matrix.map((row, i) => (
            <div key={i}>
              {row.map((col, j) => (
                <button key={j}>{col}</button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Board;
