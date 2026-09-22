import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info})
{
    
    let INIT_IMAGE='https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww'
    let HOT_IMAGE='https://plus.unsplash.com/premium_photo-1661962369601-37be76489d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D'
    let COLD_IMAGE='https://plus.unsplash.com/premium_photo-1736520566694-e03efef7e797?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D'
    let RAINY_IMAGE='https://images.unsplash.com/photo-1438260483147-81148f799f25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJhaW55JTIwd2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D'

    return(
        <div className='InfoBox'>
            
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80?RAINY_IMAGE:info.temp>15?HOT_IMAGE:COLD_IMAGE}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
          <p>Temperature:{info.temp}&deg;C</p>
          <p>Min temp:{info.tempMin}&deg;C</p>
          <p>Max temp:{info.tempMax}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
   
    </Card>
            </div>
    
        </div>
    )
}