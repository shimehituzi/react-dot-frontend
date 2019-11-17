import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import Brightness1Icon from '@material-ui/icons/Brightness1';

class ColorPulletContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '1'
    }
  }

  handleChange = (_, newColor) => {
    if (newColor != null) this.setState({color: newColor})
    this.props.changeColor(newColor)
  }

  getColor = (data) => {
    switch(data) {
      case '1':
        return '#616161'
      case '2':
        return '#ff8a80'
      case '3':
        return '#82b1ff'
      case '4':
        return '#b9f6ca'
      case '5':
        return '#ffff8d'
      case '0':
        return '#f5f5f5'
      default:
        return '#f5f5f5'
    }
  }

  render() {
    const renderTB = ({
      key,
      value,
      color,
    }) => (
      <ToggleButton
        key={key}
        value={value}
        style={{width: "30px", height: "30px"}}
      > 
        <Brightness1Icon style={{color: color}}/>
      </ToggleButton>
    )

    return(
      <Grid container justify="center" style={{marginBottom: "5%"}}>
        <ToggleButtonGroup size="small" value={this.state.color} exclusive onChange={this.handleChange}>
          {renderTB({key: '1', value: '1', color: this.getColor("1")})}
          {renderTB({key: '2', value: '2', color: this.getColor("2")})}
          {renderTB({key: '3', value: '3', color: this.getColor("3")})}
          {renderTB({key: '4', value: '4', color: this.getColor("4")})}
          {renderTB({key: '5', value: '5', color: this.getColor("5")})}
          {renderTB({key: '0', value: '0', color: this.getColor("0")})}
        </ToggleButtonGroup>
      </Grid>
    )
  }
}

export default ColorPulletContainer
