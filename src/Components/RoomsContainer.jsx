import React from 'react'
import RoomContainer from './RoomContainer'

let RoomsContainer = props => {
  return(
    <div>
      {props.roomsData.map((room) => {
        return(
          <RoomContainer room={room} key={room.id}/>
        )
      })}
    </div>
  )
}

export default RoomsContainer
