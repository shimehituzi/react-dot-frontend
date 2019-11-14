import React from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {MuiThemeProvider} from '@material-ui/core';
import {theme} from './materialUI/theme';
import RoomContainer from './RoomContainer'
import AppbarContainer from './AppbarContainer'
import FormContainer from './FormContainer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [],
      formFlag: false
    }
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SERVER_URL + "/rooms")
      .then((result) => {
        this.setState({rooms: result.data})
      })
      .catch((data) => {
        console.log(data)
      })
  }

  triggerRoomCreateForm = () => {
    this.setState({formFlag: !this.state.formFlag})
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <AppbarContainer triggerRoomCreateForm={this.triggerRoomCreateForm}/>
            {this.state.formFlag && <FormContainer/>}
            <RoomContainer roomsData={this.state.rooms} />
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default MainContainer
