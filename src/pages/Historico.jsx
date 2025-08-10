import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetch from '../hooks/useFetch';
import ExchangeCard from '../components/ExchangeCard';

export default function Historico() {
  const [date, setDate] = useState('');
  const [queryUrl, setQueryUrl] = useState(null);

  const { data, loading, error } = useFetch(queryUrl);

  const onSearch = () => {
    if (!date) {
      alert('Selecciona una fecha válida');
      return;
    }
    // Como open.er-api.com no tiene histórico, aquí solo forzamos a traer la última tasa
    setQueryUrl(`https://open.er-api.com/v6/latest/USD`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Histórico por fecha</Typography>
      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mt: 2, mr: 2 }}
      />
      <Button variant="contained" onClick={onSearch} sx={{ mt: 2 }}>
        Buscar
      </Button>

      {loading && <div>Cargando histórico...</div>}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Error al cargar histórico. Solo se muestra la tasa actual base USD.
        </Typography>
      )}

      {data && data.rates && (
        <div style={{ marginTop: 20 }}>
          <Typography>
            Base: {data.base} — Fecha: {data.time_last_update_utc}
          </Typography>
          <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            {Object.entries(data.rates).map(([c, r]) => (
              <ExchangeCard key={c} currency={c} rate={r} base={data.base} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}