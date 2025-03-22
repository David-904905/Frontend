import { useState, useEffect } from "react";

const PostComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const retrieveData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            if (data && data.length) setData(data);
        } // the async keyword should come before the function parameters

        retrieveData();
    }, [])


    return (
        <>
            {
                data.map((data, index) => (
                    <div key={index} className="post">
                        <h2>User Id: {data.userId}</h2>
                        <h3>Post Id: {data.id}</h3>
                        <h2>Title: {data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                ))
             }
        </>
    )
}

export default  PostComponent;