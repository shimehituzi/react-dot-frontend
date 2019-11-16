import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core'
import CampusContainer from './CampusContainer'

class DotFormContainer extends React.Component {
  handleCancel = () => {
    this.props.handleClose()
    console.log("cancel")
  }

  handleOK = () => {
    this.props.handleClose()
    console.log("OK")
  }

  render() {
    return(
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="sm"
        open={this.props.open}
      >
        <DialogTitle>投稿</DialogTitle>
        <DialogContent dividers>
          <CampusContainer/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOK} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default DotFormContainer
