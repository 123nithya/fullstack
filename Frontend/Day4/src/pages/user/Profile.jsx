import "../../assets/CSS/Profile.css"
// import avatar from "../../assets/Images/bg2.jpg"
import user from "../../assets/Images/user.jpg"
import Card from '@mui/material/Card';
import { GoProjectRoadmap } from "react-icons/go";
import { MdEmojiEvents } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { SiOpenbadges } from "react-icons/si";
import ProfileTable from "./ProfileTable";

function Profile()
{
    return(
        <div className="cont">
            <div className="bigContainer">
                <div className="card-container">
                    <div className="img-header">
                        <img src={user} alt="avatar" />
                    </div>
                    <div style={{textAlign:'justify'}}>
                        <h1 className="bold-text">
                            Rhea Royce
                        </h1>
                        <br />
                        <h2 className="normal-text">rhearoyce123@gmail.com</h2>
                        <h2 className="normal-text">Beginner-A1 player</h2>
                        <h2 className="normal-text">Online Coaching</h2>
                        <h2 className="normal-text">+91 7896541374</h2>
                        <h2 className="normal-text">https://linkedin.com/in/rhea-royce-345745896</h2>
                    </div>                    
                </div>
                <div className="card-containerone" style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div>
                        <Card elevation={3} style={{margin:'15px',padding:'3%',width:'500px',height:'180px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h2 style={{color:'#007791',fontWeight:'bold', fontSize:'30px'}}>
                                Projects
                            </h2>
                            <GoProjectRoadmap style={{color:'#007791',fontSize:'25px',marginTop:'9px',marginLeft:'60px'}}/>                        
                            </div>
                            <br />
                            <div>
                                <h2>18</h2>
                                <p>2 Completed</p>
                            </div>
                        </Card>
                        <Card elevation={3} style={{margin:'15px',padding:'3%',width:'500px',height:'180px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h2 style={{color:'#007791',fontWeight:'bold', fontSize:'30px'}}>
                                Events
                            </h2>
                            <MdEmojiEvents style={{color:'#007791',fontSize:'25px',marginTop:'9px',marginLeft:'60px'}}/>                        
                            </div>
                            <br />
                            <div>
                                <h2>50</h2>
                                <p>20 Completed</p>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card elevation={3} style={{margin:'15px',padding:'3%',width:'500px',height:'180px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h2 style={{color:'#007791',fontWeight:'bold', fontSize:'30px'}}>
                                Courses
                            </h2>
                            <SiCoursera style={{color:'#007791',fontSize:'25px',marginTop:'9px',marginLeft:'60px'}}/>                        
                            </div>
                            <br />
                            <div>
                                <h2>5</h2>
                                <p>3 Completed</p>
                            </div>
                        </Card>
                        <Card elevation={3} style={{margin:'15px',padding:'3%',width:'500px',height:'180px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h2 style={{color:'#007791',fontWeight:'bold', fontSize:'30px'}}>
                                Badges
                            </h2>
                            <SiOpenbadges style={{color:'#007791',fontSize:'25px',marginTop:'9px',marginLeft:'60px'}}/>                        
                            </div>
                            <br />
                            <div>
                                <h2>5</h2>
                                <p>3 Completed</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <ProfileTable />
            </div>
        </div>
    )
}

export default Profile;