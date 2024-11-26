import { useEffect, useState } from "react";
import axios from "axios";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    axios
      .get<{ success: boolean; data: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore && data.success) {
          setData(data.data); // Aquí accedemos al arreglo en `data.data`.
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url]);

  return { data, loading, setData, setLoading };
}
