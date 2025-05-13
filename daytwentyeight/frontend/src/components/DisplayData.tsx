import { useFetchMessage } from "../hooks/FetchData";

const DisplayData = () => {
    const url = "http://localhost:8000";

    const {data, error} =  useFetchMessage(url);
  return (
    <>
        <section className="get-data">
            {error && <p>Error: {error}</p>}
            {!error && !data && <p>Loading...</p>}
            {data && <p>{data.message}</p>}
        </section>
    </>
  )
}

export default DisplayData