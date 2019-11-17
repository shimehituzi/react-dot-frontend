import React from 'react'
import {ListItem} from '@material-ui/core'
import {getColor} from './getColor'

class CommentContainer extends React.Component {
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
                    <div key={i} className="dot" style={{background: `${getColor(this.props.comment.text.charAt(i))}`}} ></div>
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
