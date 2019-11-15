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
      color: "5"
    }
  }

  handleClick = (i) => {
    const dots = this.state.dots.slice()
    dots[i] = this.state.color
    this.setState({dots: dots})
  }

  render() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

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
                    <Dot value={this.state.dots[i]} handleClick={() => this.handleClick(i)} key={i} />
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

let Dot = props => {
  const getColor = () => {
    switch(props.value) {
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

  return(
    <button className={`dot ${getColor()}`} onClick={props.handleClick}></button>
  )
}

export default CommentContainer
