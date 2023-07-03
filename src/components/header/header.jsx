import "./header.css";
export default function Header({length}){
    return (
        <header className="notes__header">
            <h1 className="notes__title text-align-center">All notes</h1>
            <div className="notes__count">{length || 0} notes</div>
            <div className="notes__header-divider"></div>
        </header> 
    )
}