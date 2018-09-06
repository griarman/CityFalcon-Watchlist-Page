import React,{ PureComponent } from 'react'
import ArticleList from '../ArticleList/'
import articles from '../../stories'

class Main extends PureComponent{
    render(){
        return(
            <main>
                <h1>Watchlist</h1>
                <ArticleList stories={articles}/>
            </main>
        )
    }
}

export default Main