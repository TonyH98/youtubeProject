
    const key = process.env.REACT_APP_YOUTUBE_KEY
    const URL = `https://youtube.googleapis.com/youtube/v3/search?key=`

    export const getYoutubeVideos = () => {
      return (

         fetch(`${URL}${key}`)
         .then((res) => res.json())
      )
    }
    

    