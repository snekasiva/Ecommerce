
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';



function Cart() {
  const [MobileDetail, setMobileDetail] = useState([])
  const [removeid,setremoveid]=useState()

  const fetchMobileDetails = () => {
    axios.get('https://64ed83b71f872182714154f5.mockapi.io/Cart').then((res) => {
      setMobileDetail(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchMobileDetails()
  }, [])

  const total = MobileDetail.reduce((prev, curr) => prev + parseInt(curr.Price), 0)

  const handleremove = (id) => {
    axios.delete(`https://64ed83b71f872182714154f5.mockapi.io/Cart/${id}`).then((res) => {
      toast.success("deleted successfully")
      fetchMobileDetails()
    }).catch((err) => {
      console.log(err);
    })
  }

  const onremove=(id)=>{
    setremoveid(id)
  }
  return (
    <div className='container'>
      <div className='d-flex flex-row justify-content-end mb-3'>
        <div className='input m-2'>
          <h4>Total Cost</h4>
          <h2>{total}</h2>
        </div>
        <div className='input m-2'>
          <h4>Total Cart</h4>
          <h2>{MobileDetail.length}</h2>
        </div>
      </div>
      <div className='row mt-5'>
        {
          MobileDetail.map((list,i) => {
            return <div className='col-3 m-2'>
              <img src={list.Image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{list.Price}</h5>
                <p>{list.Productdetails}</p>
                <p>{list.Productcode}</p>
                <p className='remove' 
                id={`remove_cart_${i}`}
                onClick={()=>onremove(list.id)}><i class="fa fa-times" aria-hidden="true"></i>remove</p>
                <Popover
                
                  flip
                  target={`remove_cart_${i}`}
                  isOpen={list.id===removeid}
                >
                  <PopoverHeader>
                    Remove product from cart
                  </PopoverHeader>
                  <PopoverBody>
                   <button className='mx-2' onClick={() => handleremove(list.id)}>Remove</button>
                   <button onClick={()=>setremoveid('')}>Cancel</button>
                  </PopoverBody>
                </Popover>
              </div>
            </div>
          })
        }
      </div>
    </div >
  )
}
export default Cart