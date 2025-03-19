import './invalidMessage.css'
export default function TempMessage({wrong}) {
    if(wrong){
    return (
        <div id="notification"> Word is not in the dictionary</div>
    )
    }
    else{
        return null;
    }
}