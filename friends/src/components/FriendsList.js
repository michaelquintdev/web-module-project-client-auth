import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utilities/axiosWithAuth'

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
            
        </div>
    )
}

export default FriendsList
