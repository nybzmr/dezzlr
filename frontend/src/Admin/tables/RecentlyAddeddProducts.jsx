import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { dressPage1 } from '../../Data/dress/page1';

const RecentlyAddedProducts = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader
        title='Recently Added Products'
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={
          <Typography
            variant='caption'
            sx={{ color: 'blue', cursor: 'pointer', paddingRight: '.8rem' }}
            onClick={() => navigate('/admin/products')}
          >
            View All
          </Typography>
        }
        titleTypographyProps={{
          variant: 'h5',
          sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dressPage1.slice(0, 5).map(item => (
              <TableRow key={item.name} hover sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>
                  <Avatar alt={item.title} src={item.imageUrl} />
                </TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.brand}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{'Dress'}</TableCell>
                <TableCell>{item.discountedPrice}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RecentlyAddedProducts;
