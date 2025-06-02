export interface WelcomeResponse
{
    message: string
}


export interface Product
{
    id: number,
    title: string,
    price: number,
}

export interface SingleProductResponse
{
    item?: Product | null,
    error?: string | null
}


export interface DailyQuote
{
    q: string,
    a: string,
    h: string,
    id: number,
}


export interface ContactUsPayload
{
    name: string,
    email: string,
    message: string,
}