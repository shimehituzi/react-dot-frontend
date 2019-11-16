import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'

class ColorPulletContainer extends React.Component {
  render() {
    return(
      <Grid container justify="center" style={{marginBottom: "10%"}}>
        <ToggleButtonGroup size="small">
          <ToggleButton style={{background: "#ff8a80", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton style={{background: "#82b1ff", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton style={{background: "#b9f6ca", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton style={{background: "#ffff8d", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton style={{background: "#666666", width: "30px", height: "30px"}}></ToggleButton>
          <ToggleButton style={{background: "#ffffff", width: "30px", height: "30px"}}></ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    )
  }
}

export default ColorPulletContainer
