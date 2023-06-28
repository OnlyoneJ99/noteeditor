import "./snackbar.css";
export default function SnackBar({message}){
    return(
        <div className={`snackbar-ctn pos-abs ${message !== ``?`show-snackbar`:``}`}>
            <div className="snackbar flex justify-sb">
                <div className="snackbar__icon"></div>
                <div className="snackbar__msg flex-grow-2">{message}</div>
            </div>
        </div>
    )
}