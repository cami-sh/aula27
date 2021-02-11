import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProdutoInterface } from '../../types/produtoInterface'

const Produto = () => {

    const params = useParams<any>()
    const [produto, setProduto] = useState<ProdutoInterface>()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(resposta => setProduto(resposta.data))
    },[])

    return (
        <>
            {produto !== null && 
                <div className="Exibir-Produto">
                    <h3>{produto?.title}</h3>
                    <p>{produto?.description}</p>
                    <p>R$ {produto?.price}</p>
                </div>
            }
        </>
    )
}

export default Produto