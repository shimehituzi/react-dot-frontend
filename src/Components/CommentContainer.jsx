import React from 'react'
import {ListItem} from '@material-ui/core'

class CommentContainer extends React.Component {
  getColor = (data) => {
    switch(data) {
      case '1':
        return '#ff8a80'
      case '2':
        return '#82b1ff'
      case '3':
        return '#b9f6ca'
      case '4':
        return '#ffff8d'
      case '5':
        return '#616161'
      case '0':
        return '#f5f5f5'
      default:
        return '#f5f5f5'
    }
  }

  render() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
    const row = 9
    const col = 9

    return(
      <ListItem>
        <div className="campus-table">
          {range(0, row-1, 1).map((j) => {
            return(
              <div className='campus-row' key={j}>
                {range(j * col, j * col + col -1, 1).map((i) => {
                  return(
                    <div key={i} className="dot" style={{background: `${this.getColor(this.props.comment.text.charAt(i))}`}} ></div>
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
