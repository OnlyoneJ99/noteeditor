import "./loader.css";
export default function Loader(){
    return (
        <div className="notes__loader-ctn flex jus-center align-center">
            <div className="notes__loader flex jus-center align-center">
                <div className="notes__loader-bar"></div>
                <div className="notes__loader-bar mi-10"></div>
                <div className="notes__loader-bar"></div>
            </div>
        </div>
    )
}