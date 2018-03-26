import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NewStoryContainer from './NewStoryContainer';
import StoryContainer from './StoryContainer';
import StaticComponent from '../components/StaticComponent';
import Welcome from '../components/Welcome';
import { Route, Switch } from 'react-router-dom';
import SessionsContainer from './SessionsContainer'
import LogInContainer from './LogInContainer'


// import StoryContainer from './StoryContainer';

export default class Page extends Component {
	state = {
		user: {},
		isLoggedIn:false
	}

	logout = () => {
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('jwt')
  }

	componentDidMount() {
    if (localStorage.getItem('jwt')) {
      let options = {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }
      fetch("http://localhost:3000/users", options)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            user: json,
						isLoggedIn:true
          })

        })
    } else {
      console.log("You are not logged in")
    }
  }

	loginUser = (loginParams) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(loginParams)
    }
    fetch("http://localhost:3000/auth", options)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("jwt", json.token)
        this.setState({
          user: json.user,
          isLoggedIn: true
        }, () => {

        })
      })
  }


	render() {
		if (localStorage.getItem('jwt')) {
			return(
				<div>
					<Navbar loggedIn={this.state.isLoggedIn} handleLogout={this.logout}/>
						<Switch>
							<Route path="/new-story" component={NewStoryContainer} />
							<Route path="/stories" component={StoryContainer} />
							<Route path='/signup' component={SessionsContainer} />
							<Route path='/login' render={() => <LogInContainer logInUser={this.loginUser} />} />
							<Route
								path="/:slug"
								render={renderProps => <StaticComponent {...renderProps} />}
							/>
							<Route path="/" component={Welcome} />
						</Switch>
				</div>
			)
		} else {
			return(
				<div>
					<Navbar />
					<LogInContainer logInUser={this.loginUser} />
				</div>
			)
		}

	}
}
