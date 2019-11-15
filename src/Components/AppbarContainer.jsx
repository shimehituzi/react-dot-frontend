import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

class AppbarContainer extends React.Component {
  handleClick = () => {
    this.props.triggerRoomCreateForm()
  }

  render() {
    const style = {
      flexGrow: 1
    }

    return(
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h5" style={style}>
            EIChat
          </Typography>
          <IconButton color="secondary" size="small" onClick={this.handleClick}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default AppbarContainer
