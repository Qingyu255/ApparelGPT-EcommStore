import { Fragment, useEffect, useState } from "react"
import ProductCard from "../../components/productCard/ProductCard"


export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])

  useEffect(() => {
    fetch("/api/products")
      .then(response => response.json())
      .then(json => setProductsInfo(json))
  }, [])

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))]

  return (
    
    <Fragment>
      {/* Make card responsive pls */}
      {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          <h2 className="text-3xl font-bold mx-10 ">{categoryName}</h2>
          <div className="flex overflow-x-auto snap-x">
            {productsInfo.filter(p => p.category === categoryName).map(product =>(
              <div key={product.id} className="snap-start">
                <ProductCard key={product.id} name={product.name} image={product.picture} description={product.description} price={product.price}/>
              </div>
            ))}
          </div>
          
        </div>
      ))}
    </Fragment>
  )
}

