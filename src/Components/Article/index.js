import React, { PureComponent } from 'react'

export default class Article extends PureComponent{
    state = {
        isOpen: false
    };
    render(){
        const {story} = this.props;
        const name = (!story.author_followers_count) && <span> CNBC </span>  || <span><i className="fab fa-twitter"/> @CNBC </span> ;
        const time = this.myTime(story.publishTime);
        const text = this.state.isOpen? this.description(story):'';
        const header = <section className={'el-header'} key = {story.id}>
            <div>{story.title}</div>
            <div>
                <div>{name}</div>
                <div>{time}</div>
                <div className={'text'}>{(story.author_followers_count)? text:''}</div>
            </div>
            <div>{(!story.author_followers_count)?' ' + text + ' ' : ''}</div>
        </section>;
        const arrow = this.state.isOpen && <i className="fas fa-arrow-down up" onClick={this.handleClick}/> ||
                                           <i className="fas fa-arrow-down down" onClick={this.handleClick}/>;
        const main = <section className={'score'}>
            <span>{story.score}%</span>
            {arrow}
        </section>;
        const content = this.state.isOpen && <div className={"content"}>
            <div className={'icons'}>
                <div>
                    <i className="far fa-bookmark"/>
                    Bookmark
                </div>
                <div>
                    <i className="far fa-thumbs-up"/>
                    Like
                </div>
                <div>
                    <i className="far fa-thumbs-down"/>
                    Dislike
                </div>
            </div>
        </div>;
        return(
            <div>
                <div className={'element'}>
                    <div className={'el-img'}>
                        <img src={story.domain_cached_logo_url} alt={''}/>
                    </div>
                    {header}
                    {main}
                </div>
                {content}
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    myTime = (time) => {
        let all = new Date().getTime();
        let myTime = new Date(time).getTime();
        let difference = all - myTime;
        let maxSeconds = 60000,
            maxMinutes = maxSeconds * 60,
            maxHours = maxMinutes * 24,
            maxDays = maxHours * 7,
            maxWeeks = maxDays * 4,
            maxMonths = maxWeeks * 12;

        if(difference <= maxSeconds){
            return 'A few seconds ago';
        }
        else if(difference < maxMinutes){
            let min = Math.floor(difference/maxSeconds);
            return min + ' minutes ago.';
        }
        else if(difference < maxHours){
            let hour = Math.floor(difference/maxMinutes);
            return hour + ' hours ago.';
        }
        else if(difference < maxDays){
            let day = Math.floor(difference/maxHours);
            return day + ' days ago.';
        }
        else if(difference < maxWeeks){
            let week = Math.floor(difference/maxDays);
            return week + ' weeks ago.';
        }
        else if(difference < maxMonths){
            let month = Math.floor(difference/maxWeeks);
            return month + ' months ago.';
        }
        else {
            let year = Math.floor(difference / maxMonths);
            return year + ' years ago.';
        }
    };
    description = (story) => {
        return (!story.author_followers_count) ? story.description : 'Followers : ' + story.author_followers_count;

    }
}
