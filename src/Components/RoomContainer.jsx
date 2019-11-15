import React from 'react'
import axios from 'axios'
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
      open: false,
    }
  }

  handleRoomClick = (room_id) => {
    if (this.state.isClose)  {
      axios.get(process.env.REACT_APP_SERVER_URL + "/rooms/" + room_id + "/comments")
        .then((result) => {
          this.setState({comments: result.data})
        })
        .catch((data) => {
          console.log(data)
        })
    } 
    this.setState({isClose: !this.state.isClose})
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClickClose = () => {
    this.setState({open: false})
  }

  render() {
    return(
      <ExpansionPanel onClick={() => this.handleRoomClick(this.props.room.id)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <Toolbar>
            <Typography variant="h6" color="textPrimary" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{this.props.room.name}</Typography>
          </Toolbar>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container justify = "center">
            <Grid item xs={12} style={{marginBottom: "10%"}}>
              <Grid container justify = "center">
                <Fab color="secondary" size="medium" onClick={this.handleClickOpen}>
                  <AddIcon />
                </Fab>
                <DotFormContainer/>
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
