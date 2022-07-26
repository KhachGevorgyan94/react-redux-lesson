import React, {useEffect, useState} from "react";

const NewProducts = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getProductsList()
  }, [])

  /** Asinxron  zaprosneri hamar  funkcianern
   * sarqum enq ayuc dzev
   * Fetch function options/ by default method 'GET'
   * @method - 'GET','POST', 'DELETE', 'PUT'
   * @body - any object data, hasanelia bolor methodnerin  baci 'GET', 'DELETE' methodic
   * @headers = for auth token data ev
   * anvtangutyan  vorosh  kesyer  pahelu hamar
   * **/

  const getProductsList = async () => {
    setIsLoading(true)

    await fetch('https://fakestoreapi.com/products/15', {
      method: 'DELETE'
    })
    const result = await fetch('https://fakestoreapi.com/products', {
      method: 'GET'
    })
      .then(data => {
        return data.json()
      }).then(data => {
        return data
      })
      .catch(err => {
        console.log(err, 'errrrr')
      })


    if (result.length) {
      setProducts(result)
      console.log(result)
      setIsLoading(false)
    }
  }

  const createProduct = async () => {
    const result = fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        // 'auth':"asdkhfkjlasdhfkjlashdflaskdf",
        // 'authorisation':'sdjlkfghajkhsdgfkjhasdgfkjahsgdfjhkasdgf'
      },
      body: {
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      }
    })
      .then()
  }


  return <div className='P-products-list'>
    {isLoading ? <span className="loader"></span> : products.length? products.map((item, index) => {
      return <div className='P-product-box'>
        <div style={{backgroundImage: `url('${item.image}')`}}/>
        <h3>{item.category}</h3>
        <h2>{item.description}</h2>
      </div>
    }) : <div>Empty list</div>}

  </div>
}
export default NewProducts