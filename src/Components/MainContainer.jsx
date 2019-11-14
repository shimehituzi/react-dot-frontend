import React from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import RoomContainer from './RoomContainer'
import {MuiThemeProvider} from '@material-ui/core';
import {theme} from './materialUI/theme';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
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

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <RoomContainer roomsData={this.state.rooms} />
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default MainContainer
