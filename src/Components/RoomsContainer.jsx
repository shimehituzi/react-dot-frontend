import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class RoomsContainer extends React.Component {
  render() {
    return(
      <div>
        {this.props.roomsData.map((room) => {
          return(
            <ExpansionPanel key={room.id} >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <strong>{room.name}</strong>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          )
        })}
      </div>
    )
  }
}

export default RoomsContainer
