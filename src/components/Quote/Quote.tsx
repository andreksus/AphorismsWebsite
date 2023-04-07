import {FC, useEffect, useState} from "react";
import {QuoteAuthor, QuoteContainer, QuoteQ} from "./Style";

interface IQuoteProps {
    quote: string,
    author: string,
}

export const Quote: FC<IQuoteProps> = ({quote, author}: IQuoteProps) => {
    return (
        <QuoteContainer>
            <QuoteQ>"{quote}"</QuoteQ>
            <QuoteAuthor>{author}</QuoteAuthor>
        </QuoteContainer>
    )
}

/*const [data, setData] = useState<any>(null);
const [load, setLoad] = useState(true)
async function loadQuotes() {
    try {
        const response = await fetch("https://api.quotable.io/quotes?tags=happiness&limit=4");
        const data = await response.json();
        setData(data);
        setLoad(false);
    }
    catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    loadQuotes();
}, []);

if (!data) return null;

// console.log(data);
console.log(data.results[0].content);*/

