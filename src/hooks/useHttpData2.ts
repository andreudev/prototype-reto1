import { useEffect, useState } from "react";
import axios from "axios";

// Tipos para la respuesta HTTP genérica
export type HttpDataResponse<T> = {
  success: boolean;
  data: T[];
  message?: string; // Agregado para manejar mensajes de error
};

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    setError(null); // Resetear el error antes de hacer la nueva solicitud

    axios
      .get<HttpDataResponse<T>>(url, { signal }) // Ahora manejamos la respuesta más detallada
      .then(({ data }) => {
        if (!ignore && data.success) {
          setData(data.data); // Acceder correctamente a los datos
        } else if (data.message) {
          setError(data.message); // Mostrar mensaje de error de la API si existe
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Hubo un problema con la solicitud."); // Mensaje general si falla la solicitud
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
      controller.abort(); // Cancelar la solicitud si el componente se desmonta
    };
  }, [url]);

  return { data, loading, error, setData, setLoading }; // Ahora devolvemos el estado de error
}
