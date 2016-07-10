import React, { Component }  from 'react'
import Article from './Article'
import toggleOpenArticle from './decorators/toggleOpenArticle'

class ArticleList extends Component{
    render(){
        const { toggleOpenArticle, openArticleId, articles } = this.props

        const listItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id == openArticleId}
                     toggleOpenArticle = { toggleOpenArticle(article.id) }
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

export default toggleOpenArticle(ArticleList)