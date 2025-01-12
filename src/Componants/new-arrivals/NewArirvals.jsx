import React, { useEffect, useState } from 'react'
import "./NewArirvals.css";
import { Link, Links } from 'react-router-dom';

const NewArirvals = () => {

 const[products,setProduts]=useState([]);

 
  async function getProduct(){
    try{
   const res=await fetch("https://dummyjson.com/products?limit=4");
   const data= await res.json();
    setProduts(data.products);
    console.log(products);
    
  }

catch(error){
console.log(error);
  }
}
useEffect(()=>{
  getProduct()
},[]);




  return(
  <>
<section className="cards-container">
        <div className="card-heading">
            <h2>NEW ARRIVALS</h2>
        </div>


       

        <div className="card-item flex center wrap">
       {products.map((product)=>{
        return(
        <>
          <Link to={`/productpage/${product.id}`}>
                 
            <img src={product.thumbnail} alt="" />
            <p>{product.title}</p>
            <p> ${product.price}</p>
        </Link>

            

         
</>
        )
        })

        }
      
           
        </div>
        
        <div className="view-all-btn flex center">
            <button className="show-all">View All</button>
        </div>
    </section>


  </>
  )
}

export default NewArirvals