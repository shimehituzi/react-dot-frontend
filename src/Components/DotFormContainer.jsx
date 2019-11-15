import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

class DotFormContainer extends React.Component {
  render() {
    return(
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={this.props.handleClickClose}>
            <CloseIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default DotFormContainer
