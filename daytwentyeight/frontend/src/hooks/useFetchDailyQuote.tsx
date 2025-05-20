import type { DailyQuote } from "@interfaces/Interface";
import { useEffect, useState } from "react";

const useFetchDailyQuote = () => {
  const [retrievedQuote, setRetrievedQuote] = useState<DailyQuote | null>(
    () => {
      const saved = localStorage.getItem("quote");
      return saved ? JSON.parse(saved) : null;
    }
  );
  const [error, setError] = useState<string>("");
  const url = "http://127.0.0.1:8000/api/v1/today-quote/";

  useEffect(() => {
    const fetchDailyQuote = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const data: DailyQuote = await response.json();

        const saved = localStorage.getItem("quote");
        const current = saved ? JSON.parse(saved) : null;

        if (data.id !== current?.id) {
          localStorage.setItem("quote", JSON.stringify(data));
          setRetrievedQuote(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error while fetching quote");
      }
    };

    fetchDailyQuote();
  }, []);

  console.log(retrievedQuote);
  return { retrievedQuote, error };
};

export default useFetchDailyQuote;
