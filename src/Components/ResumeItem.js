import parse from 'html-react-parser'
import '../styles/ResumeItem.css'

export function ResumeItem(props) {
    return (
        <div className="resume-item">
            <h4>{ props.item.title }</h4>
            { parse(props.item.content) }
        </div>
    )
}