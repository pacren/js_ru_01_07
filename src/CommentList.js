import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }
    render() {
        const comments = this.props.comments
        
        const { isOpen } = this.state

        const btnText = isOpen ? "Hide comments" : "Show comments"

        const commentItems = 
            comments && isOpen && comments.map((comment) => 
                <li key = {comment.id}><Comment comment = {comment}/></li>) || "No commet"

        return (
            <div>
                <a href="#" onClick = {this.toggleOpen}>{ btnText }</a>
                <div> { isOpen ? commentItems : ""} </div>
            </div>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList