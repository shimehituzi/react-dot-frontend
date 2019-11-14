import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: []
    }
  }

  render() {
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <strong>{this.props.room.name}</strong>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    )
  }
}

export default RoomContainer
