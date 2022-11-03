import React, { useState } from 'react'
import api from '../../service/api'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"

function CadastroCarro() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [marca, setMarca] = useState("")
    const [imagem, setImagem] = useState("")
    const [modelo, setModelo] = useState("")

    const [carros, setCarros] = useState([]);

    const createCar = async () => {
        
        if(preco===""||nome===""||marca===""||modelo==="") {
            return alert("Existem campos inválidos ou não preenchidos!")
        }

        const newCar = {

            nome: nome,
            marca: marca,
            modelo: modelo,
            preco: preco,
            imagem: imagem,
        }

        const {data} = await api.post('/carros', newCar);

        setCarros(data)

        alert("Carro cadastrado com sucesso");

        setNome("")
        setPreco("")
        setMarca("")
        setModelo("")
        setImagem("")
    }

  return (
    <>
    <Header/>    
    <div className='car-novo-container'>
        <div className='car-form'>
            <h1 className='text-form'>Adicionar novo carro</h1>
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
                <button type="button" onClick={createCar} >
                Salvar
                </button>
            </div>
        </div>      
    </div>
    <Footer/>
    </>
  )
}

export default CadastroCarro
