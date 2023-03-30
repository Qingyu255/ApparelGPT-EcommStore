import Link from "next/link"
import { Fragment } from "react"

function NavBar() {
    return (
            <Fragment>
                <div className="flex bg-sky-300 py-6 mb-10 rounded-b-md">
                    <h1 className="px-10 grow text-2xl font-bold">The Tote Stop</h1>
                    <nav className="flex items-center justify-center">
                        <div className="font-semibold">   
                            <Link href = "/" className="px-7 hover:text-slate-700">All Totes</Link>    
                            <Link href="/customise" className="px-10 hover:text-slate-700">Customise Your Own</Link>                               
                        </div> 
                    </nav>
                </div>
            </Fragment>
    )
}

export default NavBar
