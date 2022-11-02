import React from 'react'
import CardAdm from '../CardAdm/CardAdm'
import { useEffect, useState } from "react";
import api from '../../service/api';
import Header from '../Header';
import Footer from '../Footer';

function CardsAdm() {
  
  const [carros, setCarros] = useState([]);
  const getCarros = async () => {
    const { data } = await api.get("/carros");

    data.sort((a, b) => {
      return a.preco - b.preco;
    });

    setCarros(data);
  };


  useEffect(() => {

    getCarros()

  }, [])

  return (
    <>
    <Header/>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {
            carros.map((item, index) => {
              while (index <= 11) {
                return (
                  <div className='col-md-3' key={index}>
                    <CardAdm nome={item.nome} preco={item.preco} modelo={item.modelo} marca={item.marca} />
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

export default CardsAdm
