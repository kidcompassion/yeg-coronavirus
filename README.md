This is a React SPA that retrieves gifs from giphy and info from a Google Alerts feed and combines it into a UI that is intended to reduce the gravitas of all the Coronavirus updates, so people can follow them without feeling as anxious.

## To prepare

First, you'll need a key from GIPHY: https://developers.giphy.com/docs/api#quick-start-guide
Create a config.js file in the src/ directory, and add your key in this format:

```
const keys = {
    giphy: "YOUR_API_KEY"
}

export default keys;
```


## To begin

Run `npm install`.

Run `npm start`.


## How it's set up

The logic is in Components/FeedIndex file. On load, it hits a Google Alerts feed for "Edmonton" and "Coronavirus" and parses the provided XML.

Next, it goes to the giphy API and grabs the most recent 25 posts in a couple of categories; this is so the gifs change on reload. Then, it shuffles all the gifs, and slices the first 20 into an array. 

Now, the 20 posts from google and the 20 gifs alternate as they are loaded into the page.

Styles are in src/sass



