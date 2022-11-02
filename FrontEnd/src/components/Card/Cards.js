import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from "react";
import api from '../../service/api';
import Header from '../Header';
import Footer from '../Footer';

function Cards() {

  const [car, setCar] = useState([]);
  const getCar = async () => {
    const { data } = await api.get("/car");

    data.sort((a, b) => {
      return a.price - b.price;
    });

    setCar(data);
  };


  useEffect(() => {

    getCar()

  }, [])

  return (
    <>
    <Header/>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {
            car.map((item, index) => {
              while (index <= 11) {
                return (
                  <div className='col-md-3' key={index}>
                    <Card name={item.name} price={item.price} />
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Cards
