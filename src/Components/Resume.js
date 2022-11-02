import { SectionTitle } from "./SectionTitle";
import { ResumeTitle } from "./ResumeTitle";
import { ResumeItem } from "./ResumeItem";
import ResumeItems from "../data/resumeItems.json"
import "../styles/Resume.css"


export function Resume() {

return (
    <div className="resume">
        <div className="container">
            <SectionTitle/>
            <div className="row">
                <div className="col-lg-6">
                    { ResumeItems.firstCol.map(function (item, index) {
                        return (
                            <div key={index}>
                                {item.title !== '' &&
                                    <ResumeTitle title={item.title}/>
                                }
                                <ResumeItem item={item.resumeItem} />
                            </div>
                        )
                    }) }

                </div>
                <div className="col-lg-6">
                    { ResumeItems.secondCol.map(function (item, index) {
                        return (
                            <div key={index}>
                                {item.title !== '' &&
                                    <ResumeTitle title={item.title}/>
                                }
                                <ResumeItem item={item.resumeItem} />
                            </div>
                        )
                    }) }

                </div>
            </div>
        </div>
    </div>
)
}