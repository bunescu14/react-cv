import "../styles/ResumeTitle.css"

export function ResumeTitle(props) {
    return (
        <>
            <h3 className="resume-title">{ props.title }</h3>
        </>
    )
}