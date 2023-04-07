import React, {FC} from "react";
import './HeaderStyles';
import '../pages/MainPage/Styles.css';
import {getTag} from "../../methods/getTag";

export const Header: FC = () => {
    const url = "https://api.quotable.io/quotes?tags=business&limit=5";

    const fetchApi = async (url: string) => {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    return (
        <div className={"headersBody"}>
            <div className={"headersTitle"}>
                <p className={"title"}>AphorismsWebsite</p>
            </div>
        </div>
    )
}

