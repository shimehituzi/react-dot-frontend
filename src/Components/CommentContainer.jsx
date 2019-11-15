import React from 'react'
import {ListItem} from '@material-ui/core'

class CommentContainer extends React.Component {
  constructor(props) {
    super(props)
    const row = 9
    const col = 9
    this.state = {
      col: col,
      row: row,
      dots: Array(row * col).fill("0"),
    }
  }

  getColor = (data) => {
    switch(data) {
      case '1':
        return 'dot-red'
      case '2':
        return 'dot-blue'
      case '3':
        return 'dot-green'
      case '4':
        return 'dot-yellow'
      case '5':
        return 'dot-black'
      case '0':
        return 'dot-white'
      default:
        return 'dot-white'
    }
  }

  render() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
    const row = this.state.row
    const col = this.state.col

    return(
      <ListItem>
        <div className="campus-table">
          {range(0, row-1, 1).map((j) => {
            return(
              <div className='campus-row' key={j}>
                {range(j * col, j * col + col -1, 1).map((i) => {
                  return(
                    <div key={i} className={`dot ${this.getColor(this.props.comment.text.charAt(i))}`}></div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </ListItem>
    )
  }
}

export default CommentContainer
