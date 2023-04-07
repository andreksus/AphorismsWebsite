import {FC, useEffect, useState} from "react";
import {Body, CategoryTitle, QuotesDiv} from "./Style";
import {Quote} from "../../Quote/Quote";

interface ICategoryProps {
    category: string,
    limit: number
}

export const CategoryPage: FC<ICategoryProps> = ({category, limit}: ICategoryProps) => {
    const [data, setData] = useState<any>(null);
    const [id, setId] = useState<any>(1);
    const api = "https://api.quotable.io/quotes?tags=" + category + '&limit=' + limit;
    console.log(1)

    async function getQuotes(){
        try{
            const response = await fetch(api);
            const { statusCode, statusMessage, ...data } = await response.json();
            setData(data);
            console.log(api)
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getQuotes().catch(() => console.log(Error));
        return () => {
            
        }
    }, []);

    if (!data) return null;

    /*Quotes*/
    const Quotes = data.results.map((q: any) =>
        <Quote key={q.id} quote={q.content} author={q.author}></Quote>
    );

    console.log()

    return (
        <Body>
            <CategoryTitle>{category}</CategoryTitle>
            <QuotesDiv>
                {Quotes}
            </QuotesDiv>
        </Body>
    )
}