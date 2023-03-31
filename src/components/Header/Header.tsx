import {FC} from "react";
import './HeaderStyles';
import './Styles.css';
export const Header: FC = () => {
    return (
        <div className={"headersBody"}>
            <div className={"headersTitle"}>
                <p className={"title"}></p>
            </div>
            <div className={"line1"}></div>
            <div className={"links"}>
                <div className={"favorites"}></div>
                <div className={"categories"}></div>
            </div>
            <div className={"line2"}></div>
        </div>
    )
}