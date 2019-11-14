import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'

class CommentsContainer extends React.Component {
  render() {
    return(
      <List>
        {this.props.commentsData.map((comment) => {
          return(
            <ListItem dense={true} key={comment.id}>
              <ListItemText
                primary={comment.text}
              />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default CommentsContainer
