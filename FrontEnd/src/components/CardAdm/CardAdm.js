import React from 'react'
import "./styles.css";
import fusca from '../../assets/fusca.jpg'
import { AiOutlineDelete} from 'react-icons/ai';
import { BiEdit} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'

function CardAdm({nome, preco, modelo, marca, imagem, id}) {

  const navigate = useNavigate();

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
                <button class="btn btn-light" onClick={()=>navigate('/edit/'+id)} >
                        <BiEdit />
                      </button>
                      <button class="btn btn-light" onClick={()=>navigate('/delete/'+id)} >
                        <AiOutlineDelete />
                      </button>
            </div>      
    </div>
    </div>
  )
}

export default CardAdm;