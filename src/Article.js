import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from './decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    render() {
        const { isOpen, toggleOpen, article: { title, text, comments } } = this.props
        const body = isOpen ? <section> { text } <CommentList comments = { comments }/> </section> : null;

        return (
            <div>
                <h1 onClick = { toggleOpen }>{ title }</h1>
                { body }
            </div>
        )
    }
}

export default toggleOpen(Article)