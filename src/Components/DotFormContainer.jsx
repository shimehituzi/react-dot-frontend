import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper} from '@material-ui/core'
import CampusContainer from './CampusContainer'
import Draggable from 'react-draggable'

let PaperComponent = props => <Draggable cancel={ '[class*="MuiDialogContent-root"]' }><Paper {...props} /></Draggable>

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
        PaperComponent={PaperComponent}
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
