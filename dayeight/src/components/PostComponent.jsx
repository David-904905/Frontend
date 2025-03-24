import useFetch from "../customhooks/useFetchHook";

const PostComponent = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts")
    return (
        <>
            {
                data && data.map((item) => (
                    <div className="post">
                        <h2>Title: {item.title}</h2>
                        <p>Body: {item.body}</p>
                    </div>
                ))
            }
        </>
    )
}


export default PostComponent;