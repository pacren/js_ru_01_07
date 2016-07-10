import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment: { user, text } } = props;

    return (
        <div>
            <h5>{ user }</h5>
            <p>{ text }</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment