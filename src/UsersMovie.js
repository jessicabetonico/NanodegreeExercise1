import React, {Component} from 'react'

class UsersMovie extends Component {
  render(){
    const {profiles, users, movies} = this.props
    return(
      <ul>
      	{profiles.map((profile) => (      		
      		<li key={profile.userID}> <p>{ `${users[profile.userID].name} favorite movie is ${movies[profile.favoriteMovieID].name} `}</p></li>      
      	))}
      </ul>     
    )
  }  
}
export default UsersMovie