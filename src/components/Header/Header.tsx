import {FC} from "react";
import './HeaderStyles';
import './Styles.css';
export const Header: FC = () => {
    const api: string = "https://quotes.rest/qod?language=en";

    const fetchApi = async (url: string) => {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    fetchApi(api).then();

    return (
        <div className={"headersBody"}>
            <div className={"headersTitle"}>
                <p className={"title"}>AphorismsWebsite</p>
            </div>
            <div className={"line1"}></div>
            <div className={"links"}>
                <div className={"favorites"}>Favorites</div>
                <div className={"menu"}>
                    <div className={"categories"}>Categories</div>
                    <img className={"menuIcon"} src="public/icons/menu.svg" alt=""/>
                </div>
            </div>
            <div className={"line2"}></div>
            <p className={"bestAphorisms"}>Best Aphorisms</p>
        </div>
    )
}