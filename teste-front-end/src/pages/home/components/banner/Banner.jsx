import React from 'react'
import './banner.scss'

import Crown from './assets/CrownSimple.svg'

function Banner() {
  return (
    <section className="category-menu">
      <ul>
        <li className="category-itens dropDown-menu">Todas Categorias</li>
        <li className="category-itens dropDown-menu">Supermercado</li>
        <li className="category-itens dropDown-menu">Livros</li>
        <li className="category-itens dropDown-menu">Moda</li>
        <li className="category-itens dropDown-menu">Lançamentos</li>
        <li className="category-itens dropDown-menu">Ofertas do dia</li>
        <li className="category-itens dropDown-menu">
          <img src={Crown} alt="" />
          Assinatura
        </li>
      </ul>

      <div className="banner-container">
        <div>
          <h1>Venha conhecer nossas promoções</h1>
          <p>50% Off nos produtos</p>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  )
}

export default Banner
