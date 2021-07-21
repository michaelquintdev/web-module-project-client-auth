import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utilities/axiosWithAuth'
import Friend from './Friend'

function FriendsList() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {friends.map((friend) => {
                return <Friend friend = {friend} key = {friend.id}/>
            })}
        </div>
    )
}

export default FriendsList
