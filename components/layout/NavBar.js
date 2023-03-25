import Link from "next/link"
import { Fragment } from "react"

function NavBar() {
    return (
            <Fragment>
                <div className="flex bg-slate-400 py-6 mb-10 rounded-b-md">
                    <h1 className="px-10 grow text-xl font-bold">The TOTE store</h1>
                    <nav>
                        <div className="font-semibold">   
                            <Link href = "/" className="px-7">All Totes</Link>    
                            <Link href="/customise" className="px-10">Customise Your Own</Link>                               
                        </div> 
                    </nav>
                </div>
            </Fragment>
    )
}

export default NavBar
