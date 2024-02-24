// import home from '../../assets/Images/home.jpg'
import "../../assets/CSS/Home.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import player from "../../assets/Images/player.jpg";

const Home = () => {

  return (
   <div style={{marginBottom:'10%'}} >
     <div className='home'>
      <div className="typo">
        <h1 style={{marginLeft:'25px'}}>Every Chess Master</h1>
        <br />
        <h1>Was Once a Beginner!!!</h1>
      </div>
    </div>
    <div style={{marginTop:'50px'}}>
    <Card elevation={3} style={{margin:'15px',padding:'50px',display:'flex',gap:'15%'}}>
        <div style={{width:'50%'}}>
          <h2 style={{color:'#FBA834',fontWeight:'bold', fontSize:'30px'}}>
            Proudly presenting grandmaster <br />XYZ as our brand ambassador.
          </h2>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Exercitationem praesentium enim distinctio, qui corrupti, molestias<br /> 
          sapiente odit magnam placeat consequatur itaque iure quae minus ullam<br /> 
          ea sed atque amet rerum corporis temporibus. Nemo quas eaque,<br /> 
          error ad cupiditate illo dolore nisi nam consequuntur blanditiis<br />  
          exercitationem, quae officiis in consectetur assumenda.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Exercitationem praesentium enim distinctio, qui corrupti, molestias<br /> 
          sapiente odit magnam placeat consequatur itaque iure quae minus ullam<br /> 
          ea sed atque amet rerum corporis temporibus. Nemo quas eaque,<br /> 
          error ad cupiditate illo dolore nisi nam consequuntur blanditiis<br />  
          exercitationem, quae officiis in consectetur assumenda.</p>
        </div>
        <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img src={player} alt="pla yer" style={{width:'500px',borderRadius:'30px'}}/>
        </div>
      </Card>
    </div>
    <div className="course">
      <h1>Popular Courses</h1>
      <hr style={{width:'800px',position:'relative', left:'23%'}}/>
      <h4>Best Courses available in KNIGHTS to make you Victorious in Chess</h4>
      <div style={{marginTop:'50px',display:'flex',justifyContent:'space-evenly'}}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={player}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Course 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia earum ex quidem! Est quos possimus corrupti recusandae sed nesciunt!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={player}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Course 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia earum ex quidem! Est quos possimus corrupti recusandae sed nesciunt!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={player}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Course 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia earum ex quidem! Est quos possimus corrupti recusandae sed nesciunt!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',marginTop:'100px'}}>
      <h1>Thank you for selecting KNIGHTS😊</h1>
    </div>
   </div>
  )
}

export default Home