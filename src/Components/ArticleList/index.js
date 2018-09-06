import React,{ PureComponent } from 'react'
import Article from '../Article/'

export default class ArticleList extends  PureComponent{

    render(){
        let {stories} = this.props.stories;
        // console.log(stories);
        stories = stories.map((story)=>
            <li key = {story.id} >
                <Article story = {story}/>
            </li>
        );
        return (
            <ul id={'tweets'}>
                {stories}
            </ul>
        )
    }
}
