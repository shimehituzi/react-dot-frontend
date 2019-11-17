import React from 'react'
import axios from 'axios'
import update from 'react-addons-update'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CommentsContainer from './CommentsContainer'
import {Toolbar, Fab, Typography, Grid} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DotFormContainer from './DotFormContainer'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      isClose: true,
      open: false
    }
  }

  handleRoomClick = () => {
    if (this.state.isClose)  {
      axios.get(process.env.REACT_APP_SERVER_URL + "/rooms/" + this.props.room.id + "/comments")
        .then((result) => {
          this.setState({comments: result.data})
        })
        .catch((data) => {
          console.log(data)
        })
    } 
    this.setState({isClose: !this.state.isClose})
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  createComment = (text) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/rooms/" + this.props.room.id + "/comments")
      .then((result) => {
        this.setState({comments: result.data})
      })
      .catch((data) => {
        console.log(data)
      })
    axios.post(process.env.REACT_APP_SERVER_URL + "/rooms/" + this.props.room.id + "/comments", {text: text})
      .then((result) => {
        const newData = update(this.state.comments, {$unshift:[result.data]})
        this.setState({comments: newData})
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return(
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={this.handleRoomClick}>
          <Toolbar>
            <Typography variant="h6" color="textPrimary" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              {this.props.room.name}
            </Typography>
          </Toolbar>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container justify = "center">
            <Grid item xs={12} style={{marginBottom: "10%"}}>
              <Grid container justify = "center">
                <Fab color="secondary" size="medium" onClick={this.handleOpen}>
                  <AddIcon />
                </Fab>
                <DotFormContainer
                  keepMounted
                  open={this.state.open}
                  handleClose={this.handleClose}
                  createComment={this.createComment}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify = "center">
                <CommentsContainer commentsData={this.state.comments}/>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default RoomContainer
