import { useState, useEffect } from 'react';

function useFetch(url: string, body: object) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  useEffect(() => {
    if (isFormSubmited) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });

          setIsFormSubmited(false);
        } catch (err) {
          setError(err as Error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [body, url, isFormSubmited]);

  return { isLoading, error, setIsFormSubmited };
}

export default useFetch;
