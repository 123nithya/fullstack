  import logo from "../../assets/Images/logo1.png"
  import '../../assets/CSS/Signup.css'
  import { useFormik } from "formik";
  import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

  const Signup = () => {
    const nav = useNavigate();
    const formik = useFormik({
      initialValues:{
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPass: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Username is required'),
        mobile: Yup.number().typeError("Enter valid Phone Number").required("Mobile no. is required"),
        email: Yup.string().email("Enter valid email").required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPass: Yup.string().required("Confirmation is required"),
      }),
      onSubmit: (values)=>{
        console.log('Form is submitted with values:',values);

        NavTo();
      },
    });
    const NavTo = () => {
      nav("/my-project/login");
    };
    return (  
      <div className="signup_container">
        <nav>
          <div className='menu'>
            <div className='logo'>
              <a href='#'><img src={logo} alt="logo" style={{width:'15%',height:'10%',marginTop:'5px',borderRadius:'50%'}}/></a>
            </div>
          </div>
          </nav>
          <div className="signcenter">
            <form className="form" onSubmit={formik.handleSubmit}>
              <h1>SignUp</h1>
              <div className="inputBox">
                <label className="label">Username</label>
                <br />
                <input 
                  type="text" 
                  className="input"  
                  placeholder="Username" 
                  id="name" 
                  name="name" 
                  required 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.name} 
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error">{formik.errors.name}</div>
                )}
              </div>
              <div className="inputBox">
                <label className="label">Mobile No.</label>
                <br />
                <input type="text"
                 className="input" 
                 placeholder="Number"
                 id="mobile"
                 name="mobile"
                 required
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.mobile}
                 />
                 {formik.touched.mobile && formik.errors.mobile && (
                  <div className="error">{formik.errors.mobile}</div>
                 )}
              </div>
              <div className='inputBox'>
                <label className="label">Email</label>
                <br />
                <input type="email"
                 className="input"
                 placeholder="Email" 
                 id="email"
                 name="email"
                 required
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.email}
                 />
                 {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                 )}
              </div>
              <div className='inputBox'>
                <label className="label">Password</label>
                <br />
                <input 
                type="password" 
                className="input" 
                placeholder="Password" 
                id="password"
                 name="password"
                 required
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.password}  
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                 )}
              </div>
              <div className='inputBox'>
                <label className="label">Confirm Password</label>
                <br />
                <input 
                type="password" 
                className="input" 
                placeholder="Confirm Password" 
                id="confirmPass"
                 name="confirmPass"
                 required
                 onChange={formik.handleChange}
                //  onBlur={formik.handleBlur}
                 value={formik.values.confirmPass}  
                />
                {formik.touched.confirmPass && formik.errors.confirmPass && (
                  <div className="error">{formik.errors.confirmPass}</div>
                 )}
              </div>
              <button type="submit" className="btn">SignUp</button>
            </form>
          </div>
          
      </div>
    )
  }

  export default Signup;
