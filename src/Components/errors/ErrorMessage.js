
import "./ErrorMessage.css"

export default function ErrorMessage (props){
    return (
      <div className="error" onClick={props.onClose}>
      <div className="error-content" onClick={e => e.stopPropagation()}>
       <div className="error-header">
           <h4 className="error-title">Share Link</h4>
       </div>
       <div className="error-footer">
           <button onClick={props.onClose}className="close">Close</button>
       </div>
       </div>     
   </div>
      );
}