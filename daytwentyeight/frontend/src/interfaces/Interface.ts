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