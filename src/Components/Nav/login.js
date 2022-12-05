
export default function Login(props){

    if(!props.show){
        return null
    }


    return(
        <div className="share" onClick={props.onClose}>
        <div className="share-content" onClick={e => e.stopPropagation()}>
         <div className="share-header">
             <h4 className="share-title">Please Login</h4>
         </div>
         <div className="share-body">
            <form>
                <label htmlFor="userName">Username: </label>
                <input
                type="text"
                id="userName"
                placeholder="Username"
                />
                <br></br>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input
                type="text"
                id="password"
                placeholder="Password"
                />
                <br></br>
                <button>Login</button>
            </form>
         </div>
         <div className="share-footer">
             <button onClick={props.onClose}className="close">Close</button>
         </div>
         </div>     
     </div>
    )
}