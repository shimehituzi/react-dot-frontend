import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'

class ColorPulletContainer extends React.Component {
  render() {
    const toggleButton = [
        <ToggleButtonGroup size="small">
          <ToggleButton key={1} value="" style={{background: "#ff8a80", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton key={2} value="" style={{background: "#82b1ff", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton key={3} value="" style={{background: "#b9f6ca", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton key={4} value="" style={{background: "#ffff8d", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton key={5} value="" style={{background: "#666666", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton key={6} value="" style={{background: "#ffffff", width: "30px", height: "30px"}}></ToggleButton>
        </ToggleButtonGroup>
    ]

    return(
      <Grid container justify="center" style={{marginBottom: "10%"}}>
        {toggleButton}
      </Grid>
    )
  }
}

export default ColorPulletContainer
