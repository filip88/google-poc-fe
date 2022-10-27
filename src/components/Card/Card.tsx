import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface IMediaCard {
  item: {
    account: {
      email: string,
    },
    title: string,
    url: string,
    description: string
  }
}

const MediaCard: React.FC<IMediaCard> = ({ item }) => (
  <Card sx={{ maxWidth: 245, height: 350 }}>
    <CardMedia
      component="img"
      height="180"
      image={item.url === 'No data' ? 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' : item.url}
      alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
    </CardContent>
  </Card>
)

export default MediaCard
