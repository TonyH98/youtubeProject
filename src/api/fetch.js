const key = process.env.REACT_APP_YOUTUBE_KEY
// const URL = `https://youtube.googleapis.com/youtube/v3/search?key=`
const URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='



export function getYoutubeVideos(search , order , number){
  return (
    // console.log(`fetch param ${search}`)
     fetch(`${URL}${search}&maxResults=${number}&order=${order}&key=${key}`)
     
     .then((res) => res.json())
  )
}



// export function updateForm(id , form){
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(form),
//     headers: { "Content-Type": "application/json" },
//   };

//   return(
//     fetch(`/videos/${id}`, options)
//     .then((res) => {
//       return(
//         res.json()
//       )
//     })
//   )
// }














