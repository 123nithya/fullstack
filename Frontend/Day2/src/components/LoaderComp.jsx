import Loader from "react-js-loader";

const LoaderComp = () => {
  return (
    <div>
      <div className={"item"}>
                    <Loader type="box-rectangular" bgColor={"black"} color={"black"} title={"box-rectangular"} size={100} />
                </div>
    </div>
  )
}

export default LoaderComp;
