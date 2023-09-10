import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

function Shoes() {
  const [data, setdata] = useState([])
  const fetchmobilelist = async () => {
    const res = await axios.get('https://64ed83b71f872182714154f5.mockapi.io/Mobile')//give url in a string
    if (res.status == 200) {
      setdata(res.data);
    }
  }
  console.log(data);
  useEffect(() => {
    fetchmobilelist()
  }, [])

  const handleaddtocart =(cart)=>{
    console.log(cart)
    axios.post('https://64ed83b71f872182714154f5.mockapi.io/Cart',cart).then((res=>{
      toast.success("cart added successfully")
    })).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='container'>
      <div className='row mt-5'>
        {
          data.map((list) => {
            return <div className='col-3 m-2'>
              <div class="card" style={{ width: "18rem" }}>
                <img src={list.Image} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{list.Price}</h5>
                  <p>{list.Productdetails}</p>
                  <p>{list.Productcode}</p>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a class="btn btn-primary" onClick={()=>handleaddtocart(list)}>Add to cart</a>
                </div>
              </div>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Shoes