import React from 'react'
import {ListItem, ListItemText} from '@material-ui/core'

class CommentContainer extends React.Component {
  render() {
    return(
      <ListItem dense={true}>
        <ListItemText
          primary={this.props.comment.text}
        />
      </ListItem>
    )
  }
}

export default CommentContainer
