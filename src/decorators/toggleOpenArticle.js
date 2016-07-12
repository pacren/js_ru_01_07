import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }
  //привязка к статье в названиях плохо - вы же создаете декоратор для переиспользования логики в других местах, почему toggleOpenArticle, openArticleId

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
