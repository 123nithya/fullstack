// // import { useState } from "react";
// // import { experimentalStyled as styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // // import CardMedia from '@mui/material/CardMedia';
// // import { Input, Rate } from "antd";

// // import Typography from '@mui/material/Typography';
// // import { CardActionArea } from '@mui/material';
// // import image from "../../assets/Images/c1.jpg"
// // import SearchBar from './SearchBar';
// // import data from "../../assets/Others/AcademyData.json"

// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(2),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// // }));

// // const { Search } = Input;

// // export default function ResponsiveGrid() {
// //   const onSearch = (value, _e, info) => console.log(info?.source, value);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const filteredData = Data.filter((result) =>
// //     result.title.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <Box sx={{ flexGrow: 1 }} style={{marginTop:'20px',marginBottom:'10%',marginRight:'2%',marginLeft:'2%'}}>
// //        <Search
// //           placeholder="input search Academy.."
// //           allowClear
// //           enterButton="Search"
// //           size="large"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           style={{ width: "50%" }}
// //           className="custom-search"
// //         />

// //       <br />
// //       <br />
// //       <br />
// //       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
// //         {/* {Array.from(Array(51)).map((_, index) => ( */}
// //         {filteredData.map((result, index) => (

// //           <Grid item xs={2} sm={4} md={4} key={index}>
// //             <Item>
// //             <Box sx={{ minWidth: 275 }}>
// //             <Card sx={{ maxWidth: 500 }}>
// //               <CardActionArea>
// //                 <img src={image} alt="Chess" style={{width:'350px',marginTop:'10px',borderRadius:'20px'}}/>
// //                 <CardContent>
// //                   <Typography gutterBottom variant="h5" component="div">
// //                     {result.title}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia earum ex quidem! Est quos possimus corrupti recusandae sed nesciunt!
// //                   </Typography>
// //                 </CardContent>
// //               </CardActionArea>
// //             </Card>
// //             </Box>
// //             </Item>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // }
// import { useState } from "react";
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Input, Rate } from "antd";
// import SearchBar from './SearchBar';
// import data from "../../assets/Others/AcademyData.json"

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const { Search } = Input;

// export default function ResponsiveGrid() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredData = data.filter((result) =>
//     result.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px', marginBottom: '10%', marginRight: '2%', marginLeft: '2%' }}>
//       <Search
//         placeholder="input search Academy.."
//         allowClear
//         enterButton="Search"
//         size="large"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{ width: "50%" }}
//         className="custom-search"
//       />

//       <br />
//       <br />
//       <br />
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {filteredData.map((result, index) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             <Item>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card sx={{ maxWidth: 500 }}>
//                   <CardActionArea>
//                     {/* Use result.image or an appropriate field from your data */}
//                     <img src={result.image} alt="Academy" style={{ width: '350px', marginTop: '10px', borderRadius: '20px' }} />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {result.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {result.description}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Box>
//             </Item>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
import React, { useState } from "react";
import { Input, Rate } from "antd";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../../assets/Others/AcademyData.json";
// import "../../assets/css/user.css";
import { Link } from "react-router-dom";
const { Search } = Input;

export default function Academy() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [searchQuery, setSearchQuery] = useState("");
  const [hovered, setHovered] = useState(false);

  // Filter data based on search query
  const filteredData = Data.filter((result) =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (id) => {
    console.log("Clicked on card with ID:", id);
    // Handle whatever you need to do with the ID here
  };

  return (
    <>
      <div
        style={{
          marginTop: "5%",
          width: "70vw",
          float: "inline-end",
          marginBottom: "3%",
        }}
      >
        <Search
          placeholder="input search Academy.."
          allowClear
          enterButton="Search"
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%" }}
          className="custom-search"
        />
      </div>

      <div>
        <Container maxWidth="lg" style={{ marginTop: "1%",marginBottom:"2%" }}>
          <Grid container spacing={2}>
            {filteredData.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                {/* <Card
                  sx={{ maxWidth: 345,height:"100%",borderRadius:"20px" }}
                  style={{ padding: "5%" }}
                  elevation={5}
                >
                  <CardMedia
                    sx={{ height: 230 }}
                    image={result.img}
                    // {console.log({result.img})}
                    title={result.title}
                    
                    style={{ borderRadius: "20px" }}
                  />
                  <center>
                    <CardContent style={{marginBottom:"-8%"}}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {result.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {result.des}
                      </Typography>
                      <Rate value={result.rate} />
                    </CardContent>
                  </center>
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      component={Link} // Use Link as the component
                      to={`/reign/user/academy/${result.id}`}
                      variant="contained"
                      style={{ backgroundColor: "#6c926d", color: "white" }}
                      size="large"
                      onClick={() => handleCardClick(result.id)}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card> */}
                <Card sx={{ maxWidth: 500 ,height:500}}>
              <CardActionArea>
                     {/* Use result.image or an appropriate field from your data */}
               <img src={result.img} alt="Academy" style={{ width: '350px', marginTop: '10px', borderRadius: '20px' ,height:"200px"}} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                         {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                         {result.des}
                       </Typography>
                     </CardContent>
                     <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      component={Link} // Use Link as the component
                      to={`/my-project/user/academy/${result.id}`}
                      variant="contained"
                      style={{ backgroundColor: "#007791", color: "white" }}
                      size="large"
                      onClick={() => handleCardClick(result.id)}
                    >
                      View
                    </Button>
                  </CardActions>
                   </CardActionArea>
                 </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}