import { useState, useEffect } from "react";

import type { WelcomeResponse, SingleProductResponse } from "../interfaces/Interface";

const defaultUrl: string = "http://localhost:8000";

// fetch data from the home route

export const useFetchMessage = (url: string) => {
    const [data, setData] = useState<WelcomeResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) throw new Error("Network response was not ok");
                const data: WelcomeResponse = await response.json();
                setData(data);
            }
            catch (err)
            {
                setError(`Error fetching from ${url}`);
                console.error(err);
            }
        }
        fetchData();
    }, [url])

    return { data, error };

}

// fetch data from the items route

export const fetchSingleProduct = async (id: number): Promise<SingleProductResponse> => {
    try {
        const response = await fetch(`${defaultUrl}/items/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data: SingleProductResponse = await response.json();
        return data;
    } catch (err: any) {
        return { "error": err.message || "Something went wrong" };
    }
};