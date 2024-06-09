import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [shop,changedata]=useState(
        [

        ]
    )
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changedata(response.data)
                console.log(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
   
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                       {shop.map(
                        (value,index)=>{
                            return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card" >
                            <img src={value.image} className="card-img-top" alt="..."/>
                                <div className="card-body">

                                   
                                    <h5 className="card-title">id:{value.id}</h5>
                                    <p className="card-text">title:{value.title}</p>
                                    <p className="card-text">price:{value.price}</p>
                                    <p className="card-text">description:{value.description}</p>
                                    <p className="card-text">price:{value.price}</p>
                                    <p className="card-text">category:{value.category}</p>
                                    <p className="card-text">rating:{value.rating.rate}</p>
                                    <p className="card-text">count:{value.rating.count}</p>
                                </div>
                            </div>
                            </div>
                        }
                       )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View