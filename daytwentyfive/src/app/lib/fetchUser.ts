interface ResponseData 
{
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: object
}


export const fetchUser = async (id: number): Promise<ResponseData> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok) throw new Error("Failed to fetch user");
    return response.json();
}