import "./share.css"
import { useParams } from "react-router-dom"
import{
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton
} from "react-share"

export default function Share(props){

const {id} = useParams()


if(!props.show){
    return null
}


    return(
        <div className="share" onClick={props.onClose}>
           <div className="share-content" onClick={e => e.stopPropagation()}>
            <div className="share-header">
                <h4 className="share-title">Share Link</h4>
            </div>
            <div className="share-body">
                <div className="facebook">
                    <FacebookShareButton url={`/videos/${id}`}>
                        <FacebookIcon size={30}/>
                    </FacebookShareButton>
                </div>
                <div className="twitter">
                    <TwitterShareButton url={`/videos/${id}`}>
                        <TwitterIcon size={30}/>
                    </TwitterShareButton>
                </div>
            </div>
            <div className="share-footer">
                <button onClick={props.onClose}className="close">Close</button>
            </div>
            </div>     
        </div>
    )
}