import {useState, useEffect} from 'react'
import api from "../../service/api";
import './styles.css'

function DeleteCarros () {

    const [id, setId] = useState(id);
    const [carros, setCarros] = useState([]);
    
    const deletarCarro = async() => {
        const { data: carrosExcluido } = await api.delete(`/carros/${id}`)
        const carrosFiltrados = carros.filter( car => car.id !== carrosExcluido.id)
        setCarros(carrosFiltrados);
        
        alert("Produto deletado com sucesso!")
    }

    useEffect(() => {
        setId(id);
        return () => {
        };
    }, []);

    return(
        <>
        </>
       
    )
}

export default DeleteCarros;