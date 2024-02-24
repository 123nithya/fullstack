import { Suspense } from "react"
import PropTypes from "prop-types"
import LoaderComp from "./LoaderComp"

const LazyLayout = ({component: Component, ...rest}) =>{
  return (
    <Suspense fallback={<LoaderComp />}>
        <Component {...rest} />
    </Suspense>
  )
}

LazyLayout.propTypes ={
    component:PropTypes.elementType.isRequired
}

export default LazyLayout