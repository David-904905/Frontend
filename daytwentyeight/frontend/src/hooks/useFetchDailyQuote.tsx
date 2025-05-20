import type { DailyQuote } from "@interfaces/Interface";
import { useEffect, useState } from "react";

const useFetchDailyQuote = () => {
  const [retrievedQuote, setRetrievedQuote] = useState<DailyQuote | null>(null);
  const [error, setError] = useState<string>("");
  const url = 'http://127.0.0.1:8000/api/v1/today-quote/';


  useEffect(() => {
    const fetchDailyQuote = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: any = response.json();
        setRetrievedQuote(data[0])
      } catch (err) {
        setError("Error while fetching quote");
      }
    };
    fetchDailyQuote();
  });
  return {retrievedQuote, error}
};

export default useFetchDailyQuote;
