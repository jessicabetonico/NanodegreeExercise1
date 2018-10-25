import React, {Component} from 'react'

class UsersMovie extends Component {
  render(){
    return(
      <ul>
      	{this.props.profiles.map((profile) => (      		
      		<li>{ `${this.props.users[profile.userID].name} favorite movie is ${this.props.movies[profile.favoriteMovieID].name} `}</li>      
      	))}
      </ul>     
    )
  }  
}
export default UsersMovie