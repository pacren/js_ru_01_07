import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = id => ev => {
        if (ev){ ev.preventDefault() }
        if (this.state.openArticleId === id) {
            id = null
        }
        this.setState({
            openArticleId: id
        })
    }


    render(){
        return <Component {...this.props}
                    openArticleId = { this.state.openArticleId}
                    toggleOpenArticle = {this.toggleOpenArticle}
                />
    }
}