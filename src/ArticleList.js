import React, { Component }  from 'react'
import Article from './Article'
import toggleOpenItem from './decorators/toggleOpenItem'

class ArticleList extends Component{
    render(){
        const { toggleOpenItem, openItemId, articles } = this.props

        const listItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id == openItemId}
                     toggleOpenArticle = { toggleOpenItem(article.id) }
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default toggleOpenItem(ArticleList)