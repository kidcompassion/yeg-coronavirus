import React from 'react';
import RSSParser from 'rss-parser';
import FeedItem from './FeedItem';
import FeedGif from './FeedGif';
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import keys from '../config.js';



class FeedIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            allPosts: [],
            loading: true
        }
        this.formatPosts.bind(this);
        this.formatPosts();
       
    }

    componentDidMount(){
        this.setState({
            loading: false
        });
    }

    formatPosts = async () => {
        let totalStories = [];
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        let parser = new RSSParser();
        await parser.parseURL(CORS_PROXY + 'https://www.google.ca/alerts/feeds/05625930400153980475/6925218829248990220')
            .then((feed)=>{ 
                totalStories = [...feed.items];
                const chinchillaGifs = `http://api.giphy.com/v1/gifs/search?q=chinchilla&api_key=${keys.giphy}&type=random&limit=5`;
                const puppyZoomieGifs = `http://api.giphy.com/v1/gifs/search?q=puppy+zoomies&api_key=${keys.giphy}&type=random&limit=5`;
                const dogBathGifs = `http://api.giphy.com/v1/gifs/search?q=puppy+bath&api_key=${keys.giphy}&type=random&limit=5`;
                const derpGifs = `http://api.giphy.com/v1/gifs/search?q=mochimochi&api_key=${keys.giphy}&type=random&limit=5`;
                 try{
                    Promise.all([
                        fetch(chinchillaGifs).then(value=>value.json()),
                        fetch(puppyZoomieGifs).then(value=>value.json()),
                        fetch(dogBathGifs).then(value=>value.json()),
                        fetch(derpGifs).then(value=>value.json()),
                    ]).then((value)=>{
                        
                        let allGifs = value[0].data.concat(value[1].data);
                        allGifs = allGifs.concat(value[2].data);
                        allGifs = allGifs.concat(value[3].data);

                        let result = [],
                        i, l = Math.min(totalStories.length, allGifs.length);
                            
                        for (i = 0; i < l; i++) {
                            result.push(totalStories[i], allGifs[i]);
                        }
                        result.push(...totalStories.slice(l), ...allGifs.slice(l));

                        this.setState({
                            allPosts: result
                        });
                    })
                }catch(err){
                    console.log(err);
                }
            }).catch((err)=>{
                console.log(err);
            })
 
    }

    render(){      
        
        return(
            <div className="component--feed_index">
                    <Header />
                    {this.state.loading ? <Loader/>:''}
                    
                    {this.state.allPosts && this.state.allPosts.map((detail, index) => {
                    // detail.name is returned for each item mapped
                    if(detail.type){
                        return(
                            <FeedGif key={detail.id} gifDetail={detail} />
                        )
                    } else{
                        return (
                            <FeedItem key={detail.id} storyDetail={detail} />
                        )
                    }
                    })} 
                    <Footer/>
                
            </div>
        )
    }
}

export default FeedIndex;