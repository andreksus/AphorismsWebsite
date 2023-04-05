import {FC} from "react";
import {Body} from "./Style";

interface ICategoryProps {
    category: string,
    limit: number
}

export const CategoryPage: FC<ICategoryProps> = ({category, limit}: ICategoryProps) => {
    return (
        <Body>
        </Body>
    )
}