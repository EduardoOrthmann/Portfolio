import { useState } from 'react';

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: string;
  headers: {
    'Content-Type': string;
  };
}

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, options: FetchOptions) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err as Error);
    }
    setLoading(false);
  };

  return { data, error, loading, fetchData };
}

export default useFetch;
