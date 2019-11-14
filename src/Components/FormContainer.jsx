import React from 'react'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core'
import {Grid} from '@material-ui/core'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChengeText = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = () => {
    this.props.createRoom(this.state.text)
    this.setState({text: ''})
  }

  handleNotSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const style = {
      root: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      button: {
        margin: '16px 0px 16px 8px',
        padding: '5px 20px'
      }
    }

    return(
      <div style={style.root}>
        <Grid item sm={10}>
          <form noValidate autoComplete="off" onSubmit={e => this.handleNotSubmit(e)}>
            <TextField
              variant="outlined"
              label="部屋名"
              color="secondary"
              margin="normal"
              fullWidth={true}
              value={this.state.text}
              onChange={ e => this.handleChengeText(e) }
            />
          </form>
        </Grid>
        <Grid item sm={2}>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            style={style.button}
            type="submit"
            onClick={this.handleSubmit}
          >
            部屋作成
          </Button>
        </Grid>
      </div>
    )
  }
}

export default FormContainer
