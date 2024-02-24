import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logo1.png';
import '../../assets/CSS/Login.css';

function Login() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Enter valid email").required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      NavTo();
    },
  });
  const NavTo = () => {
    nav("/my-project/user/home");
  };
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
              placeholder="john123@gmail.com"
              className="input"
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
          <div className="inputBox">
            <label className="label">Password</label>
            <br />
            <input
              type="password"
              placeholder="*****"
              className="input"
              id="password"
              required
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
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn" style={{ color: '#333', textDecorationColor: 'white' }}>
              Walk Into
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
