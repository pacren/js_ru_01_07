import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

class CommentList extends Component {

    render() {
        const { comments, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <h3>no comments yet</h3>

        const commentItems = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)

        const toggleText = isOpen ? "Hide comments" : "Show comments"
        const body = isOpen ? commentItems : null

        return (
            <div>
                <a href="#" onClick = { toggleOpen }>{ toggleText }</a>
                <div> { body } </div>
            </div>
        )
    }
}

export default toggleOpen(CommentList)