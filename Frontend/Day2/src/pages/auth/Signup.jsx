  import logo from "../../assets/Images/logo1.png"
  import '../../assets/CSS/Signup.css'
  import Selectone from "../user/Selectone"
  import Selecttwo from "../user/Selecttwo"
  import { useState } from "react"
  // import NavBar from "../../components/NavBar"

  const Signup = () => {

    const [bool,setBool] = useState(true);
    const handleButtonClick = () => {
      setBool(false);
    }
    return (  
      <div className="signup_container">
        <nav>
          <div className='menu'>
            <div className='logo'>
              <a href='#'><img src={logo} alt="logo" style={{width:'15%',height:'10%',marginTop:'5px',borderRadius:'50%'}}/></a>
            </div>
          </div>
          </nav>
          {/* <NavBar /> */}
          {
            bool ?

          <div className="signcenter">
            <form action="#" className="form">
              <h1>SignUp</h1>
              <div className="inputBox">
                <label className="label">Username</label>
                <br />
                <input type="text" className="input" placeholder="Username"/>
              </div>
              <div className="inputBox">
                <label className="label">Mobile No.</label>
                <br />
                <input type="text" className="input" placeholder="Number"/>
              </div>
              <div className='inputBox'>
                <label className="label">Email</label>
                <br />
                <input type="email" className="input" placeholder="Email" />
              </div>
              <div className='inputBox'>
                <label className="label">Password</label>
                <br />
                <input type="password" className="input" placeholder="Password" />
              </div>
              <div className='inputBox'>
                <label className="label">Confirm Password</label>
                <br />
                <input type="password" className="input" placeholder="Confirm Password" />
              </div>
              <button type="submit" className="btn" onClick={handleButtonClick}>Next</button>
            </form>
          </div>:
          
          <div className="center1">
            <form action="#" className="form">
              <h1>SignUp</h1>
              <div className="inputBox">
                <label className="label">Age</label>
                <br />
                <input type="age" className="input" placeholder="Age" />
              </div>
              <div className="inputBox">
                <label className="label">Type of Coaching</label>
                <Selectone placeholder="coaching type"/>
              </div>
              <div className="inputBox">
                <label className="label">Skill Level</label>
                <Selecttwo />
              </div>              
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
          }
      </div>
    )
  }

  export default Signup;
