export function getTag(url: string): string{
    const tag = url.split('quotes?tags=');
    return (tag[1].split('&')[0]);
}
