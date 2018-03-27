import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NewStoryContainer from './NewStoryContainer';
import StoryContainer from './StoryContainer';
import StaticComponent from '../components/StaticComponent';
import Welcome from '../components/Welcome';
import { Route, Switch, withRouter } from 'react-router-dom';
import SessionsContainer from './SessionsContainer'
import LogInContainer from './LogInContainer'
import withAuthentication from '../components/withAuthentication'
import ProfileContainer from './ProfileContainer'


// import StoryContainer from './StoryContainer';

export default class Page extends Component {
	state = {
		user:'',
		isLoggedIn:false
	}

	logout = () => {
		localStorage.removeItem('jwt')
    this.setState({
      isLoggedIn: false,
			user:''
    }, () => {
      this.props.history.push('/')
    })
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
					this.props.history.push("/")
        })
      })
  }




	render() {
		const NavbarWithAuth = withAuthentication(Navbar, this.state.user)
		const NewWithAuth = withAuthentication(NewStoryContainer, this.state.user)
		const StoriesWithAuth = withRouter(withAuthentication(StoryContainer, this.state.user))
		const ProfileWithAuth = withAuthentication(ProfileContainer)
			return(
				<div>
					<Navbar handleLogout={this.logout} user={this.state.user}/>
						<Switch>
							<Route path="/new-story" component={NewWithAuth} />
							<Route path="/stories" component={StoriesWithAuth} />
							<Route path='/signup' component={SessionsContainer} />
							<Route path='/profile' render={() => <ProfileWithAuth user={this.state.user} />} />
							<Route path='/login' render={() => <LogInContainer logInUser={this.loginUser} />} />
							<Route path='/feed' render={() => <StoriesWithAuth type='feed'/>} />
							<Route
								path="/:slug"
								render={renderProps => <StaticComponent {...renderProps} />}
							/>
							<Route path="/" component={Welcome} />
						</Switch>
				</div>
			)

	}
}
