import React, { useState } from 'react'
import '../content.scss'
import PartnerCarousel from './modalProduct/ProductCarousel'
import ProductCarousel from './ProductCarousel'
import Logo from '../assets/Logo.svg'
import Line from '../assets/Line.svg'

function Tech() {
  const [celular, setCelular] = useState(true)

  const handleCelular = () => {
    setCelular(true)
  }

  return (
    <section className="related-products">
      <ul className="options-container">
        <li className="options-itens activate-option">
          <button onClick={handleCelular}>Celular</button>
        </li>
        <li className="options-itens">
          <button onClick={() => {}}>Acessórios</button>
        </li>
        <li className="options-itens">
          <button onClick={() => {}}>Tablets</button>
        </li>
        <li className="options-itens">
          <button onClick={() => {}}>Notebooks</button>
        </li>
        <li className="options-itens">
          <button onClick={() => {}}>Tvs</button>
        </li>
        <li className="options-itens">
          <button onClick={() => {}}>Ver todos</button>
        </li>
      </ul>

      {celular && <PartnerCarousel />}

      {celular && (
        <>
          <article className="parceiros">
            <div className="parceiros-itens">
              <h1>Parceiros</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </div>

            <div className="parceiros-itens">
              <h1>Parceiros</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </div>
          </article>

          <article className="produtos">
            <h1>Produtos relacionados</h1>
            <img src={Line} alt="" id="line-right-produtos" />
            <img src={Line} alt="" id="line-left-produtos" />
            <p>
              <a href="#">Ver todos</a>
            </p>
          </article>

          {celular && <ProductCarousel />}

          <div className="produto-container">
            <div className="produtos-itens">
              <h1>Produtos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </div>

            <div className="produtos-itens">
              <h1>Produtos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button>Confira</button>
            </div>
          </div>

          <article className="navegue">
            <h1>Navegue por marcas</h1>
            <ul className="navegue-container">
              <li className="navegue-itens">
                <img src={Logo} alt="" />
              </li>
              <li className="navegue-itens">
                <img src={Logo} alt="" />
              </li>
              <li className="navegue-itens">
                <img src={Logo} alt="" />
              </li>
              <li className="navegue-itens">
                <img src={Logo} alt="" />
              </li>
              <li className="navegue-itens">
                <img src={Logo} alt="" />
              </li>
            </ul>
          </article>
        </>
      )}
    </section>
  )
}

export default Tech
