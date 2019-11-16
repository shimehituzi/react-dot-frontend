import React from 'react'
import {List} from '@material-ui/core'
import CommentContainer from './CommentContainer'

let CommentsContainer = props => {
  return(
    <List>
      {props.commentsData.map((comment) => {
        return(
          <CommentContainer comment={comment} key={comment.id}/>
        )
      })}
    </List>
  )
}

export default CommentsContainer
