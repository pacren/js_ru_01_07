export default {
    getInitialState(){
        return {
            openArticleId: null
        }
    },

    toggleOpenArticle(id) {
        this.setState({
            openArticleId: id
        })
    }
}