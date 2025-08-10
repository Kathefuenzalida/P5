import { useState } from 'react';
import {
  Container,
  Typography,
  Select,
  MenuItem,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';

export default function Home() {
  const baseMonedas = ['EUR', 'USD', 'GBP', 'JPY', 'CLP', 'ARS'];
  const [base, setBase] = useState('USD');
  const { rates, loading, error } = useExchangeRates(base);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tasas de cambio - Actual
      </Typography>

      <Select value={base} onChange={(e) => setBase(e.target.value)} sx={{ mb: 3 }}>
        {baseMonedas.map((moneda) => (
          <MenuItem key={moneda} value={moneda}>
            {moneda}
          </MenuItem>
        ))}
      </Select>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : rates && Object.keys(rates).length > 0 ? (
        <Paper sx={{ maxWidth: 600 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Moneda</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(rates).map(([currency, value]) => (
                <TableRow key={currency}>
                  <TableCell>{currency}</TableCell>
                  <TableCell>{value.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Typography color="error" variant="body1">
          No se encontraron tasas de cambio.
        </Typography>
      )}
    </Container>
  );
}