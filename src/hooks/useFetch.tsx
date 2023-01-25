import { useState, useEffect } from 'react';

function useFetch(url: string, body: object) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        console.log(data);
      } catch (err) {
        setError(err as Error);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (Object.entries(body).length !== 0) {
      fetchData();
    }
  }, [body, url]);

  return { isLoading, error };
}

export default useFetch;
