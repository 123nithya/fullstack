import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
const AdminLayout = ({ children }) => {
  return (
    <div className="admin_container">
    {/* <header> */}

    {/* </header> */}
        <aside>
            <Sidebar />
        </aside>
        <main style={{marginTop:"5%",marginLeft:"4.5%",overflow:"hidden",scrollbarWidth: "none" /* For Firefox */,
          "-ms-overflow-style": "none" /* For IE and Edge */,
          "::-webkit-scrollbar": {
            display: "none" /* For Chrome, Safari, and Opera */,
          },
          }}>
            {children}
        </main>
       
    </div>
  )
}

AdminLayout.propTypes = {
    children:PropTypes.node.isRequired
}

export default AdminLayout
