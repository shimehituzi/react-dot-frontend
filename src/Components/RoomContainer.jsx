import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

let Room = (props) => {
  return(
    <div>
      {props.roomsData.map((room) => {
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

class RoomContainer extends React.Component {
  render() {
    return(
      <Room roomsData={this.props.roomsData}/>
    )
  }
}

export default RoomContainer
