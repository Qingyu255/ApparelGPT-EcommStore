import { useState, useEffect } from "react"
import Bar from "./Bar"
import Footer from "./Footer"

function Layout({ children }) {
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [prevScrollY, setPrevScrollY] = useState(0)
  
    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY
            setIsNavVisible(prevScrollY > currentScrollY)
            setPrevScrollY(currentScrollY)
            if (window.scrollY === 0) {
              setIsNavVisible(true)
            }
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => window.removeEventListener("scroll", handleScroll)
    }, [prevScrollY])
  
    useEffect(() => {
        setIsNavVisible(true)
    }, [children])

    return (
      <div className="relative">
        <header className={`fixed w-full z-50 ${isNavVisible ? "top-0" : "-top-full"}`}>
          <Bar />
        </header>
        <main className="mt-16">{children}</main>
        <Footer />
      </div>
    )
  }
  
export default Layout