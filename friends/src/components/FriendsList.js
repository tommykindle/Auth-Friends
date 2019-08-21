import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
  state = {
    friendsList: []
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        this.setState({
          friendsList: res.data
        })
      })
      .catch(err => console.log(err.response))
  }
  render() {
    return (
      <div>{this.state.friendsList.map(friend => {
        return <div>
          {friend.name}
          {friend.age}
          {friend.email}
        </div>

      })} </div>
    )
  }

}

export default FriendsList