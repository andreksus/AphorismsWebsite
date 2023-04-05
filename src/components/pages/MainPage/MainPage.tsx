import React, {FC} from "react";
import {Link} from "react-router-dom";
import './Styles.css'
import {Header} from "../../Header/Header";
import {CategoryPage} from "../CategoryPage/CategoryPage";

export const MainPage: FC = () => {
    return (
        <div className={"headersBody"}>
            <div className={"line1"}></div>
            <div className={"links"}>
                <div className={"titles"}>Favorites</div>
                <div className={"categoryMenu"}>
                    <button className="menuButton">
                        <div className={"menu"}>
                            <div className={"titles"}>Categories</div>
                            <img className={"menuArrow"} src="public/icons/menu.svg" alt=""/>
                        </div>
                        <div className="categoryMenu-categories">
                            <Link to = '/happiness'><p className={"menuTitle"}>Happiness</p></Link>
                            <Link to = '/business'><p className={"menuTitle"}>Business</p></Link>
                            <Link to = '/love'><p className={"menuTitle"}>Love</p></Link>
                        </div>
                    </button>
                </div>
            </div>
            <div className={"line2"}></div>
            <p className={"bestAphorisms"}>Best Aphorisms</p>
        </div>
    )
}