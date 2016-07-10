import React from 'react'
import Article from './Article'
import toggleOpenArticle from './mixins/toggleOpenArticle'

const ArticleListOld = React.createClass({
    mixins: [toggleOpenArticle],

    render(){
        const { articles } = this.props
        const { openArticleId } = this.state

        const listItems = articles.map((article) => <li key = { article.id }>
            <Article article = { article }
                     isOpen = { article.id == openArticleId }
                     toggleOpenArticle = { this.toggleOpenArticle(article.id) }
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
})

export default ArticleListOld