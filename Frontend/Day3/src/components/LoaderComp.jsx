import Loader from "react-js-loader";

const LoaderComp = () => {
  return (
    <div>
      <div className={"item"} style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                    <Loader type="box-rectangular" bgColor={"black"} color={"black"}  size={100} />
                </div>
    </div>
  )
}

export default LoaderComp;
