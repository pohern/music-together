import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Grid, Typography, Button, ButtonGroup } from "@material-ui/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.setState = {
        roomCode: null
    }
  }

  async componentDidMount() {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
          this.setState({
              roomCode: data.code
          })
      });
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align='center'>
          <Typography variant='h3' compact='h3'>
            Music Together
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <ButtonGroup disableElevation variant='contained' color='primary'>
            <Button color='primary' to='/join' component={Link}>
              Join A Room
            </Button>
            <Button color='secondary' to='/create' component={Link}>
              Create A Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
              return this.state.roomCode ? <Redirect to={`/room/${this.state.roomCode}`}/> :  this.renderHomePage()
          }}>
          </Route>
          <Route path='/join' component={RoomJoinPage}></Route>
          <Route path='/create' component={CreateRoomPage}></Route>
          <Route path='/room/:roomCode' component={Room}></Route>
        </Switch>
      </Router>
    );
  }
}
