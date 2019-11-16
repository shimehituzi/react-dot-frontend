import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import Brightness1Icon from '@material-ui/icons/Brightness1';

class ColorPulletContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '0'
    }
  }

  handleChange = (_, newColor) => {
    if (newColor != null) this.setState({color: newColor})
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
          {renderTB({key: '1', value: '1', color: '#ff8a80'})}
          {renderTB({key: '2', value: '2', color: '#82b1ff'})}
          {renderTB({key: '3', value: '3', color: '#b9f6ca'})}
          {renderTB({key: '4', value: '4', color: '#ffff8d'})}
          {renderTB({key: '5', value: '5', color: '#616161'})}
          {renderTB({key: '0', value: '0', color: '#f5f5f5'})}
        </ToggleButtonGroup>
      </Grid>
    )
  }
}

export default ColorPulletContainer
