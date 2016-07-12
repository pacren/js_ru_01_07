import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = id => ev => {
        if (ev){ ev.preventDefault() }
        if (this.state.openItemId === id) {
            id = null
        }
        this.setState({
            openItemId: id
        })
    }

    render(){
        return <Component {...this.props}
                    openItemId = { this.state.openItemId}
                    toggleOpenItem = {this.toggleOpenItem}
                />
    }
}
