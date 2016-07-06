import { articles } from './fixtures'
import { comments } from './fixtures'
import ArticleList from './ArticleList'
import React from 'react'
import { render } from 'react-dom'

render(<ArticleList articles = {articles} comments = {comments} />, document.getElementById('container'))