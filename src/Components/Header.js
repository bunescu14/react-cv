import "../styles/Header.css"

export function Header(props) {
return (
    <header className="header-top" id="header">
        <div className="container">
            <h1>{props.name}</h1>
        </div>
    </header>
)
}