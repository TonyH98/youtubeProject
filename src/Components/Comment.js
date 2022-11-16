import CommentData from './CommentData'


export default function Comment(){
    
    
    return (
        <>
        <section> 
            
           { CommentData.map((e)=>{
            return (
                <div> 
                   { e.name} - {e.comm}
                </div>
            )
        
          })}
            </section> 
        </>
    )
}