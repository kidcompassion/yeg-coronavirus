import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const FeedItem =(props)=>{
    return(
        <div className="component--story">
            <a href={props.storyDetail.link}>
                <p>{ props.storyDetail.pubDate }</p>
                <h2>
                    {ReactHtmlParser(props.storyDetail.title)}
                </h2>
                <p>{ReactHtmlParser(props.storyDetail.content)}</p>
                <span className="story--url">{props.storyDetail.link.replace('https://www.google.com/url?rct=j&sa=t&url=', '')}</span>
            </a>
        </div>
    )
}

export default FeedItem;