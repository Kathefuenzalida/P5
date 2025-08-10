import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ExchangeCard({ currency, rate, base }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{currency}</Typography>
        <Typography>1 {base} = {rate} {currency}</Typography>
      </CardContent>
    </Card>
  );
}