import { useEffect, useState } from "react";

const useFetchQuote = (url) => {
    const storedData = JSON.parse(localStorage.getItem("quotes")) || [];
    const [data, setData] = useState(storedData);

    useEffect(() => {
        if(data.length == 0)
        {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data.quotes);
                    localStorage.setItem("quotes", JSON.stringify(data.quotes));
                })
                .catch((error) => console.log("An error occured while fetching the data", error));
            
        }

    }, [url, data.length])

    return data;
}


export default useFetchQuote;

