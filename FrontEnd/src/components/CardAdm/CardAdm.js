import React from 'react'
import "./styles.css";
import fusca from '../../assets/fusca.jpg'
import { AiOutlineDelete} from 'react-icons/ai';
import { BiEdit} from 'react-icons/bi';

function CardAdm({nome, preco, modelo, marca, imagem}) {
  return (
    <div className='card-container'>
      <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
            <img src={fusca} alt='' className='card-img-top'/>
        </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{marca}-{nome}</h4>
                <p className='card-text text-secondary'>{modelo}</p>
                <h3>R$ {preco}</h3>
                <p></p>
                <a href='/edit'><BiEdit className='edit'/></a>
                <a href='/' className='delete-form'><AiOutlineDelete className='delete'/></a>
            </div>      
    </div>
    </div>
  )
}

export default CardAdm;