import { Card } from "antd";
import h1 from "../../assets/Images/home.jpg";

const AboutUs = () => {
  return (
    <div style={{marginTop:'50px',marginBottom:'10%'}}>
      <Card elevation={3} style={{margin:'15px',padding:'50px',display:'flex',flexDirection:'row',gap:'15%'}}>
          <h1 style={{textAlign:'center'}}>About Us</h1>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'30px'}}>
            <img src={h1} alt="game" style={{width:'700px',borderRadius:'30px'}}/>
          </div>
          <div style={{marginTop:'30px',textAlign:'justify'}}>
              <p>
                Welcome to our chess academy! We are a group of passionate chess players who
                are dedicated to promoting the game of chess and helping players of all
                levels improve their skills.
              </p>
              <br />
              <p>
                Our academy was founded in 2010 by Grandmaster John Doe, who has won numerous
                awards and accolades for his chess playing. Since then, we have grown to
                include a team of experienced chess coaches who are committed to helping our
                students achieve their goals.
              </p>
              <br />
              <p>
                We offer a variety of chess classes and programs for players of all levels,
                from beginner to advanced. Whether you are looking to learn the basics of chess,
                improve your tactics and strategy, or compete in tournaments, we have a
                program thats right for you.
              </p>
              <br />
              <p>
                Our academy is located in the heart of downtown, and we are open seven days a
                week. We offer both in-person and online classes, so you can learn chess
                from the comfort of your own home.
              </p>
              <br />
              <p>
                Our academy is located in the heart of downtown, and we are open seven days a
                week. We offer both in-person and online classes, so you can learn chess
                from the comfort of your own home.
              </p>
              <br />
              <p>
                Thank you for choosing our chess academy. We look forward to helping you
                improve your chess game!
              </p>
          </div>
      </Card>
    </div>
    
  );
};

export default AboutUs;