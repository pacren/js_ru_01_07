import React, { Component } from 'react'

function Comment(props) {
    const { comment: { user, text } } = props

    return (
        <div>
            <h5>{ user }</h5>
            <p>{ text }</p>
        </div>
    )
}

export default Comment