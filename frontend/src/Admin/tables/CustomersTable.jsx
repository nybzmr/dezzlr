// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import { Avatar, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const rows = [
  {
    name: 'Sally Quinn',
    email: 'eebsworth2m@sbwire.com',
    image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70'
  },
  {
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70'
  },
  {
    name: 'Minnie Roy',
    email: 'ediehn6@163.com',
    image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70'
  },
  {
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70'
  },
  {
    name: 'Annie Martin',
    email: 'sganderton2@tuttocitta.it',
    image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70'
  }
];

const CustomersTable = () => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader
        title='New Customers'
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={
          <Typography 
            onClick={() => navigate('/admin/customers')} 
            variant='caption' 
            sx={{ color: 'blue', cursor: 'pointer', paddingRight: '.8rem' }}>
            View All
          </Typography>
        }
        titleTypographyProps={{
          variant: 'h5',
          sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0, 5).map(item => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>
                  <Avatar alt={item.name} src={item.image} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CustomersTable;
