import React from 'react'
import './New.css'
import { FiArrowUpRight,FiHeart} from 'react-icons/fi'
const products=[
  {
    id:1,
    name:'Lining Pink Shirt',
    category:'Men',
    price:'1200',
    image:'https://www.iconicindia.com/cdn/shop/files/GMS24-3240060628_1_4b5f65a3-89ca-4c0a-a0f8-abb952d85266.jpg?v=1757161225',
  },
  {
    id:2,
    name:'Lining grey Shirt',
    category:'Men',
    price:'1800',
    image:'https://assets.ajio.com/medias/sys_master/root/20241018/dcwP/67121190f9b8ef490bc5e12b/-473Wx593H-469705190-navy-MODEL.jpg',
  },
  {
    id:3,
    name:'Joggers',
    category:' Men',
    price:'1500',
    image:'https://veirdo.in/cdn/shop/files/Artboard7-2026-02-24T101409.960.jpg?v=1771908354',
  },
  {
    id:4,
    name:'POPOVER SHIRTS',
    category:'Men',
    price:'1900',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEzQPBqqgC53dA0Cbdh10thjdlFE0b0rhE66gomlf8xUIxymZZ15MJtY&s=10',
  },
  {
    id:5,
    name:'Lining Formal Shirt',
    category:'Men',
    price:'2000',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZh4NwiktEdW1bAgr5WfY1DZo-FFEHP76uidee108rN3kUjYIUAN0-WM&s=10',
  },
  
]
const New = () => {
  return (
    <>
     <section className='new-arrivals'>
      <div className='new-arrivals-heading'>
        <div>
          <p className='new-label'>JUST IN</p>
          <h2>New <span>Arrivals</span></h2>
        </div>
        {/* <Link to='/collections' className='view-all'>View All <FiArrowUpRight/></Link> */}

      </div>

      {/* PRODUCTS */}
      <div className='products-grid'>
        {products.map((product)=>(
          <div className='product-card' key={product.id}>
            {/* image */}
            <div className='product-image'>
              <img src={product.image} alt={product.name}/>
              <button className='wishlist-btn' aria-label='Add to wishlist'><FiHeart/></button>
              <div className='quick-view'>
                <button>Quick view <FiArrowUpRight/></button>
              </div>
            </div>
            {/* product info */}
            <div className='product-info'>
              <div>
                <p className='product-category'>
                  {product.category}
                </p>
                <h3>{product.name}</h3>
              </div>
              <p className='product-price'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      
      
      
      </section> 
    </>
  )
}

export default New
