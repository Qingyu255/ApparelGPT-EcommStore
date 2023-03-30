import { Fragment } from "react"
import Bar from "./bar"
import Footer from "./Footer"


function Layout({children}) {
    return (
        <Fragment>
            <Bar />
            <div>{children}</div>
            <Footer />
            
        </Fragment>
    )
}

export default Layout