//Интерфейс цитаты.
export interface IQuote {
    category: string[];
    quote: string;
    author: string;
    favorite: boolean;
    likes: number;
    image: string;
}