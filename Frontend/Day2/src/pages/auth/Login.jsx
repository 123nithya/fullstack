// import { useState } from 'react';
// import '../../assets/CSS/Login.css';
// import { Link } from 'react-router-dom'; 
// // import BasicSelect from './select';
// import logo from "../../assets/Images/logo1.png"

// function Login() {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validation using regex patterns
//     const usernameRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
//     const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/; // Minimum 8 characters, at least one letter and one number

//     if (!usernameRegex.test(username)) {
//       alert('Invalid username. Please use only alphanumeric characters.');
//       return;
//     }

//     if (!passwordRegex.test(password)) {
//       alert('Invalid password. It must be at least 8 characters long and contain at least one letter and one number.');
//       return;
//     }

//     // Continue with form submission or other logic
//     // ...
//   };


//   return (
//     <div className='body'>
//          <nav>
//           <div className='menu'>
//             <div className='logo'>
//               <a href='#'><img src={logo} alt="logo" style={{width:'15%',height:'10%',marginTop:'5px',borderRadius:'50%'}}/></a>
//             </div>
//           </div>
//           </nav>
//         <div className="center">
//             <form action="" method="_post">
//                     <h1>SignIn</h1>
//                     {/* <div>
//                         <BasicSelect placeholder="select "/>
//                     </div> */}
//                     <div className='inputBox'>
//                         <label className="label">Username</label>
//                         <br />
//                         <input type="text" placeholder="John" className="input" value={username} onChange={handleUsernameChange}/>
//                     </div>
//                     <div className='inputBox'>
//                         <label className="label">Password</label>
//                         <br />
//                         <input type="password" placeholder="*****" className="input" value={password} onChange={handlePasswordChange}/>
//                     </div>
//                     <div className="remember-forgot">
//                         <label><input type="checkbox" />Remember me</label>
//                         <a href="#">Forgot Password?</a>
//                     </div>
//                     <button type="submit" className="btn" style={{color:'#333',textDecorationColor:'white'}} onSubmit={handleSubmit}><a href='#'>Walk Into</a></button>
//                     {/* <button type="submit" className="btn"><a href='#'><Link to={"/my-project/user/home"} style={{color:'#333',textDecorationColor:'white'}} onSubmit={handleSubmit}>Walk Into</Link></a></button> */}
//                     <div className="register-link">
//                         <p>Do not have an account?<a href="#">&nbsp;<Link to={"/my-project/Signup"}>Register</Link></a></p>
//                     </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login;
// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import BasicSelect from './select';
import logo from '../../assets/Images/logo1.png';
import '../../assets/CSS/Login.css';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Enter valid email").required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="body">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                style={{ width: '15%', height: '10%', marginTop: '5px', borderRadius: '50%' }}
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="center">
        <form onSubmit={formik.handleSubmit}>
          <h1>SignIn</h1>
          <div className="inputBox">
            <label className="label">Email</label>
            <br />
            <input
              type="email"
              placeholder="John"
              className="input"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="error">{formik.errors.username}</div>
            )}
          </div>
          <div className="inputBox">
            <label className="label">Password</label>
            <br />
            <input
              type="password"
              placeholder="*****"
              className="input"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            <Link to="/my-project/user/home" style={{ color: '#333', textDecorationColor: 'white' }}>
              Walk Into
            </Link>
          </button>
          <div className="register-link">
            <p>
              Do not have an account?
              <a href="#">
                &nbsp;
                <Link to="/my-project/Signup">Register</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
