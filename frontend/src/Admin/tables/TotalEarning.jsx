import React from 'react';
import { Box, Card, Avatar, Typography, IconButton, CardHeader, CardContent, useTheme } from '@mui/material';
import MenuUp from 'mdi-material-ui/MenuUp';
import DotsVertical from 'mdi-material-ui/DotsVertical';

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Men',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Clothing, Footwear',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/z/3/7/xl-r-dark-grey-stoneberg-original-imaghghn2vcf5euv.jpeg?q=70'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Women',
    amount: '$8,650.20',
    subtitle: 'Clothing, Handbags, Jewellery',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/p/c/free-half-sleeve-jk-6-kedar-fab-original-imaghh4unhxgyveg.jpeg?q=70'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Kids',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'Clothing',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kids-t-shirt/i/7/e/10-11-years-bwtrnfulboy-bz55-blive-original-imagmuafh2ennezv.jpeg?q=70'
  }
];

const TotalEarning = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title='Total Earning'
        titleTypographyProps={{ sx: { lineHeight: '1.6rem', letterSpacing: '0.15px' } }}
        action={
          <IconButton size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(1.5)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem' }}>
            $24,895
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', ml: 2 }}>
            <MenuUp sx={{ fontSize: '1.875rem' }} />
            <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main', ml: 0.5 }}>
              10%
            </Typography>
          </Box>
        </Box>

        <Typography variant='caption' sx={{ mb: 5 }}>
          Compared to $84,325 last year
        </Typography>

        {data.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: index !== data.length - 1 ? 4 : 0
            }}
          >
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: 40,
                height: 40
              }}
            >
              <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
            </Avatar>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography variant='caption'>{item.subtitle}</Typography>
              </Box>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {item.amount}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default TotalEarning;
