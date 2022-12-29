import React from "react";
import {Link} from "react-router-dom"
import './Home.css'
import {useFetch} from '../hooks/useFetch'

const Home = () => {
   // 1 - Carregamento de dados
   const url = 'http://localhost:3000/produtos'
   const {data: items, loading, error} = useFetch(url)

    return 
      <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="produtos">
       { items && 
        items.map((item) => (
         <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>R$: {item.preco}</p>
         </li>
        ))}
      </ul>
      </div>
}

export default Home;