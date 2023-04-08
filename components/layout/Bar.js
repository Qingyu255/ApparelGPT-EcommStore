import Link from "next/link"
import { Fragment, useContext } from "react"
import { ProductsContext } from "../productCard/ProductsContext"

export default function Bar() {
    const {selectedProducts} = useContext(ProductsContext)
    return (
        <Fragment>
            {/* <!-- component -->
            <!-- follow me on twitter @asad_codes --> */}

            <div class="flex flex-wrap place-items-center">
                <section class="relative mx-auto">
                    {/* <!-- navbar --> */}
                    <nav class="flex justify-between bg-gray-900 text-white w-screen">
                        <div class="px-10 xl:px-12 py-6 flex w-full items-center">
                        
                            <Link class="text-3xl font-bold font-heading" href="/">
                                <h1>Apparel GPT</h1>
                                {/* <img class="h-9" src="logo.png" alt="logo"></img> */}
                                {/* Logo Here. */}
                            </Link>
                            {/* <!-- Nav Links --> */}
                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><Link class="hover:text-gray-200" href="/totes">Totes</Link></li>
                                <li><Link class="hover:text-gray-200" href="/shirts">Shirts</Link></li>
                                <li><Link class="hover:text-gray-200" href="/customise">Customise with AI</Link></li>
                                <li><Link class="hover:text-gray-200" href="/contacts">Contact Us</Link></li>
                            </ul>
                            {/* <!-- Header Icons --> */}
                            <div class="hidden xl:flex items-center space-x-5 items-center">
                                <a class="hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                                <a class="flex items-center hover:text-gray-200" href="/checkout">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span class="flex absolute -mt-5 ml-4">
                                    
                                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500">
                                        </span>
                                    </span>
                                    <p className="px-1.5 pt-0.5">{selectedProducts.length}</p>
                                </a>                           
                            </div>
                        </div>
                        {/* <!-- Responsive navbar --> */}
                        <a class="xl:hidden flex mr-6 items-center" href="/checkout">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                            </span>
                            <p className="pl-1.5 pt-0.5">{selectedProducts.length}</p>
                        </a>
                        <a class="navbar-burger self-center mr-12 xl:hidden" href="/side">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>
                </section>
            </div>   
        </Fragment>
    )
}