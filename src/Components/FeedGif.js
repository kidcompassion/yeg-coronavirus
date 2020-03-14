import React from 'react';

const FeedGif =(props)=>{
    return(
        <div className="component--gif">
            <img src={props.gifDetail.images.original.url} alt={props.gifDetail.title} />
        </div>
    )
}

export default FeedGif;