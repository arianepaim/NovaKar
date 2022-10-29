import React from 'react'
import "./card.css";
import fusca from '../assets/fusca.jpg'

function Card({name, price}) {
  return (
    <div className='card-container'>
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
            <img src={fusca} alt='' className='card-img-top'/>
        </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{name}</h4>
                <p className='card-text text-secondary'>R$ {price}
                    {/* {
                     text ? text : 'Sem descrição.'
                    } */}
                </p>
                <h3>R$ {price}</h3>
                <p></p>
                <a href='' className='btn btn-outline-secondary rounded-0' target='_blank'>
                Tenho Interesse
                </a>
            </div>      
    </div>
    </div>
  )
}

export default Card;

