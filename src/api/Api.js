export const GOOGLE_API_KEY = "AIzaSyB9UXf97Q3wgx2sNlihA0ZCTuT4o6YiPp0";
// export const GOOGLE_API_KEY = "AIzaSyBTKH7-fdCQIZpgq8BDcF6RWuYKCPfugZc"
// export const GOOGLE_API_KEY = "AIzaSyBYQ8FCyrkXb9ZTVD1Gdes0T9ix_9jXL68"


// export const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


// export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Slqo8SHnFaU&key=AIzaSyANjzpWgzdCjOSHU5R0Wc390Xa9BhLMLfg`;


export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const YOUTUBE_VIDEO_CATEGORY = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_CHANNEL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=`

// UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SUGGESTIONS = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

// export const YOUTUBE_RELATED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=${GOOGLE_API_KEY}`
export const YOUTUBE_RELATED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=`

export const YOUTUBE_COMMENTS = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=`

// export const YOUTUBE_SEARCH_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=harshasai&key=AIzaSyB9UXf97Q3wgx2sNlihA0ZCTuT4o6YiPp0`;
export const YOUTUBE_SEARCH_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;
// harshasai&key=AIzaSyB9UXf97Q3wgx2sNlihA0ZCTuT4o6YiPp0

// export const YOUTUBE_CHANNEL = `https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id=UCq-Fj5jknLsUf-MWSy4_brA&key=AIzaSyBTKH7-fdCQIZpgq8BDcF6RWuYKCPfugZc`

export const YOUTUBE_CHANNEl_VIDEOS = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=`

// UCq-Fj5jknLsUf-MWSy4_brA&maxResults=50&key=AIzaSyBTKH7-fdCQIZpgq8BDcF6RWuYKCPfugZc`
