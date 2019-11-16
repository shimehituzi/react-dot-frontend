import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper, Typography} from '@material-ui/core'
import CampusContainer from './CampusContainer'
import Draggable from 'react-draggable'

let PaperComponent = props => <Draggable cancel={ '[class*="MuiDialogContent-root"]' }><Paper {...props} /></Draggable>

class DotFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      text: ''
    }
  }

  handleOpenCancel = () => {
    this.setState({open: true})
  }

  handleCloseCancel = () => {
    this.setState({open: false})
  }

  handleCancel = () => {
    this.setState({open: false})
    this.props.handleClose()
  }

  handleOK = () => {
    this.props.createComment(this.state.text)
    this.props.handleClose()
    this.setState({text: ''})
  }

  updateText = (text) => {
    this.setState({text: text})
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
          <CampusContainer updateText={this.updateText}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleOpenCancel} color="primary">
            <Typography color="error">
              破棄
            </Typography>
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleCloseCancel}
          >
            <DialogTitle>本当に破棄しますか?</DialogTitle>
            <DialogActions>
              <Button onClick={this.handleCancel} color="primary">
                <Typography color="error">
                  はい
                </Typography>
              </Button>
              <Button onClick={this.handleCloseCancel} color="primary">
                <Typography color="secondary">
                  いいえ
                </Typography>
              </Button>
            </DialogActions>
          </Dialog>
          <Button onClick={this.handleOK} color="primary">
            <Typography color="secondary">送信</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default DotFormContainer
