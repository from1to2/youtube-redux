
const API_KEY=`AIzaSyCYhG0aMqcuo3MZwzUF-bi7LgVE-5wJkGs`;

export const videoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`

export function searchUrl(input){
 return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${input}&regionCode=kr&type=video&key=${API_KEY}`
}

export function channelUrl(channelId){
    return `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${channelId}&key=${API_KEY}`
}
  
  