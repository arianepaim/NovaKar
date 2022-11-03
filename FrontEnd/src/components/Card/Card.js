import React from 'react'
import "./card.css";
import fusca from '../../assets/fusca.jpg'

function Card({nome, preco, modelo, marca, imagem}) {
  return (
    <div className='card-container'>
      <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
            <img src={fusca} alt='' className='card-img-top'/>
        </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{marca} {nome}</h4>
                <p className='card-text text-secondary'>{modelo}</p>
                <h3>R$ {preco}</h3>
                <p></p>
                <a href='/cardsAdm' className='btn btn-outline-secondary rounded-0'>
                Tenho Interesse
                </a>
            </div>      
    </div>
    </div>
  )
}

export default Card;

