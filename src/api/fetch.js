const key = process.env.REACT_APP_YOUTUBE_KEY
// const URL = `https://youtube.googleapis.com/youtube/v3/search?key=`
const URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
export function getYoutubeVideos(search){
  return (
    // console.log(`fetch param ${search}`)
     fetch(`${URL}${search}&key=${key}`)
     .then((res) => res.json())
  )
}













