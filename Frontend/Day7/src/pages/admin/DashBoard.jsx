import { Card } from "@mui/material"
import {BsArrowDownRight} from "react-icons/bs";
import TableForm from "./Table";
// import Chart from "./Chart";

const DashBoard = () => {
  return (
    <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <Card style={{width:'350px',height:'100px',marginTop:'6%',marginLeft:'3%',backgroundColor:'#007791',borderRadius:'30px'}} elevation={3}>
          <div 
            style={{color:'white',display:'flex',justifyContent:'space-around',padding:'5%',alignItems:'flex-end',flexGrow:'1'}}>
              <div>
                <p className="desc">Total</p>
                <h4 className="mb-0 sub-title">$1100</h4>
              </div>
              <div
                style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                <h6><BsArrowDownRight /> 32%</h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
          </div>
          </Card>
          <Card style={{width:'350px',height:'100px',marginTop:'6%',marginLeft:'3%',backgroundColor:'#007791',borderRadius:'30px'}} elevation={3}>
          <div 
            style={{color:'white',display:'flex',justifyContent:'space-around',padding:'5%',alignItems:'flex-end',flexGrow:'1'}}>
              <div>
                <p className="desc">Total</p>
                <h4 className="mb-0 sub-title">$1100</h4>
              </div>
              <div
                style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                <h6><BsArrowDownRight /> 32%</h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
          </div>
          </Card>
          <Card style={{width:'350px',height:'100px',marginTop:'6%',marginLeft:'3%',backgroundColor:'#007791',borderRadius:'30px'}} elevation={3}>
          <div 
            style={{color:'white',display:'flex',justifyContent:'space-around',padding:'5%',alignItems:'flex-end',flexGrow:'1'}}>
              <div>
                <p className="desc">Total</p>
                <h4 className="mb-0 sub-title">$1100</h4>
              </div>
              <div
                style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                <h6><BsArrowDownRight /> 32%</h6>
                <p className="mb-0 desc">Compared to April 2023</p>
              </div>
          </div>
          </Card>
          </div>
          {/* <div>
            <Chart />
          </div> */}
          <div>
            <TableForm />
          </div>
      </div>
    </div>  
  )
}

export default DashBoard

// #776b5d \\ #fba834