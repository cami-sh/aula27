import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ProdutoInterface } from '../../types/produtoInterface'

const Home = () => {

    const[produtos, setProdutos] = useState<ProdutoInterface[]>([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(resposta => setProdutos(resposta.data))
    },[])

    return (
        <div className="flex-container">
            {produtos !== null && 
                produtos.map((item:ProdutoInterface) => (
                    <div className="Box-Produto" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>R$ {item.price}</p>
                        <Link to={`/produto/${item.id}`}><p className="button">Comprar</p></Link>
                    </div>
            ))}
        </div>
    )
}

export default Home