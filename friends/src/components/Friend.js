import React from 'react'

function Friend(props) {
    const {friend} = props;

    return (
        <div>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend
