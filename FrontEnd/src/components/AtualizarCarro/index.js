import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"
import { useParams } from "react-router-dom";

function AtualizarCarro () {

    const { id } = useParams();
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [carros, setCarros] = useState([]);
    
    const salvarCarro = async() => {
        const carrosData = {
            id: id,
            nome: nome,
            preco: preco,
            modelo: modelo,
            marca: marca,
            imagem: imagem
        }
    
        const { data } = await api.put(`/carros/${id}`, carrosData)
    
        const carroEditado = carros.map( carros => {
          if(carros.id === data.id) {
            return {
              id: carros.id,...carrosData
            }
          }
          return carros
        })
    
        setCarros(carroEditado)
        setNome("")
        setPreco("")
        setModelo("")
        setMarca("")
        setImagem("")
        
        alert("Carro atualizado com sucesso")
    }

    useEffect(() => {
        setNome(nome);
        setPreco(preco);
        setModelo(modelo);
        setMarca(marca);
        setImagem(imagem);
        return () => {
        };
    }, []);

  return (
    <>
    <Header/>    
    <div className='car-novo-container'>
        <div className='car-form'>
            <h1 className='text-form1'>Atualizar carro</h1>
            <div>
                <label className='label-form'>Nome do carro:</label>
                <input type="text" maxLength="60" className="form-control" placeholder="Nome do carro" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div>
                <label className='label-form'>Preço:</label>
                <input type="text" maxLength="60" className="form-control" placeholder="Valor do carro" value={preco} onChange={e => setPreco(e.target.value)}/>
            </div>
            <div>
                <label className='label-form'>Marca:</label>
                <input type="text" maxLength="60" className="form-control" placeholder="Marca do carro" value={marca} onChange={e => setMarca(e.target.value)}/>
            </div>
            <div>
                <label className='label-form'>Modelo:</label>
                <input type="text" maxLength="60" className="form-control" placeholder="Modelo do carro" value={modelo} onChange={e => setModelo(e.target.value)}/>
            </div>
            <div>
                <label className='label-form'>Imagem:</label>
                <input type="text" maxLength="60" className="form-control" placeholder="Imagem do carro" value={imagem} onChange={e => setImagem(e.target.value)}/>
            </div>
            <div className="botao-cadCar">
                <button type="button" onClick={salvarCarro} >
                Salvar
                </button>
            </div>
        </div>      
    </div>
    <Footer/>
    </>
  )
}

export default AtualizarCarro