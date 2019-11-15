import React from 'react'
import {List, Grid} from '@material-ui/core'
import CommentContainer from './CommentContainer'

let CommentsContainer = props => {
  return(
    <Grid container justify = "center">
      <List>
        {props.commentsData.map((comment) => {
          return(
            <CommentContainer comment={comment} key={comment.id}/>
          )
        })}
      </List>
    </Grid>
  )
}

export default CommentsContainer
