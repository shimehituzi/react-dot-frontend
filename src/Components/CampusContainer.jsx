import React from 'react'

class CampusContainer extends React.Component {
  constructor(props) {
    super(props)
    const row = 9
    const col = 9
    this.state = {
      color: '5',
      row: row,
      col: col,
      dots: Array(row * col).fill('0')
    }
  }
  
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
        return '#666666'
      case '0':
        return '#ffffff'
      default:
        return '#ffffff'
    }
  }

  handleclick = (i) => {
    const dots = this.state.dots.slice()
    dots[i] = this.state.color
    this.setState({dots: dots})
  }

  render() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
    const row = this.state.row
    const col = this.state.col

    return(
      <div className="campus-table">
        {range(0, row-1, 1).map((j) => {
          return(
            <div className='campus-row' key={j}>
              {range(j * col, j * col + col -1, 1).map((i) => {
                return(
                  <div
                    key={i}
                    className="dot"
                    style={{background: `${this.getColor(this.state.dots[i])}`}}
                    onClick={() => this.handleclick(i)}
                  >
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default CampusContainer
