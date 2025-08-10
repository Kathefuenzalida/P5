import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useExchangeRates(base = 'USD') {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!base) return;

    const fetchRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://open.er-api.com/v6/latest/${base}`;
        const res = await axios.get(url);

        if (res.status === 200 && res.data && res.data.rates) {
          setRates(res.data.rates);
        } else {
          setRates({});
          setError('No se encontraron tasas de cambio en la respuesta');
        }
      } catch (err) {
        console.error('Error al obtener las tasas:', err);
        setError('No se pudo conectar con la API');
        setRates({});
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading, error };
}