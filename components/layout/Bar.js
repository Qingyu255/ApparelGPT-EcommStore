import Link from "next/link"
import { Fragment, useContext, useState, useEffect } from "react"
import { ProductsContext } from "../productCard/ProductsContext"

export default function Bar() {
    const {selectedProducts, selectedCustomProducts} = useContext(ProductsContext)
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const logoText = "AI DRIPS"

    useEffect(() => {
        const handleToggleSidebar = () => {
            setSidebarOpen(!isSidebarOpen)
        };

        const handleResize = () => {
            if (window.innerWidth >= 763 && isSidebarOpen) { // Adjust the breakpoint according to your needs
                setSidebarOpen(false);
            }
        }
    
        const toggleSidebarElement = document.getElementById('toggleSidebar');
        toggleSidebarElement.addEventListener('click', handleToggleSidebar);
        window.addEventListener('resize', handleResize);

        return () => {
          toggleSidebarElement.removeEventListener('click', handleToggleSidebar);
          window.removeEventListener('resize', handleToggleSidebar);
        };
      }, [isSidebarOpen]);

    return (
        <Fragment>

            <div class="flex flex-wrap place-items-center">
                <section class="relative mx-auto">
                    {/* <!-- navbar --> */}
                    <nav class="flex justify-between bg-[#222629] text-white w-screen">
                        <div class="px-10 xl:px-12 py-6 flex w-full items-center">
                        
                            <Link class="text-xl lg:text-3xl font-bold font-heading" href="/">
                                <h1>{logoText}</h1>
                                {/* <img class="h-9" src="logo.png" alt="logo"></img> */}
                            </Link>
                            {/* <!-- Nav Links --> */}
                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><Link class="hover:text-gray-200" href="/customise#Tote" name="Tote">Totes</Link></li>
                                <li><Link class="hover:text-gray-200" href="/customise#T-Shirt" name="T-Shirt">Shirts</Link></li>
                                <li><Link class="hover:text-gray-200" href="/customise">Customise with AI</Link></li>
                                <li><Link class="hover:text-gray-200" href="/about">About</Link></li>
                            </ul>
                            {/* <!-- Header Icons --> */}
                            <div class="hidden lg:flex items-center space-x-5 items-center">
                                <a class="flex items-center hover:text-gray-200" href="/checkout">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span class="flex absolute -mt-5 ml-4">
                                    
                                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500">
                                        </span>
                                    </span>
                                    <p className="px-1.5 pt-0.5">{selectedProducts.length + selectedCustomProducts.length}</p>
                                </a>                           
                            </div>
                        </div>
                        {/* <!-- Responsive navbar --> */}
                        <a class="lg:hidden flex mr-6 items-center" href="/checkout">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                            </span>
                            <p className="pl-1.5 pt-0.5">{selectedProducts.length + selectedCustomProducts.length}</p>
                        </a>
                        <a class="navbar-burger self-center mr-12 md:hidden" href="#" id="toggleSidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                            <Link href="/">
                                <h1 className="text-2xl py-5 px-3 font-bold">{logoText}</h1>
                            </Link>
                            <div>
                                <ul className="px-3">
                                    <li className="py-2"><Link class="hover:text-gray-200" href="/customise#Tote" name="Tote">Totes</Link></li>
                                    <li className="py-2"><Link class="hover:text-gray-200" href="/customise#T-Shirt" name="T-Shirt">Shirts</Link></li>
                                    <li className="py-2"><Link class="hover:text-gray-200" href="/customise">Customise with AI</Link></li>
                                    <li className="py-2"><Link class="hover:text-gray-200" href="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>   
        </Fragment>
    )
}