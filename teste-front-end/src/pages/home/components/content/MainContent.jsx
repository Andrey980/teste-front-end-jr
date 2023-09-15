import React, { useState } from 'react'
import './content.scss'

import Monitor from './assets/Monitor.svg'
import Supermarket from './assets/Supermarket.svg'
import Health from './assets/Health.svg'
import Sports from './assets/Sports.svg'
import Tools from './assets/Tools.svg'
import Whiskey from './assets/whiskey.svg'
import Style from './assets/Style.svg'

import Tech from './components/Tech'

function MainContent() {
  const [tecnologia, setTecnologia] = useState(false)

  const handleClick = e => {
    setTecnologia(true)
  }

  return (
    <main className="main-content">
      <ul>
        <li className="content-itens">
          <button onClick={handleClick}>
            <img src={Monitor} alt="" />
          </button>
          <p>Tecnologia</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Supermarket} alt="" />
          </button>
          <p>Supermercado</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Whiskey} alt="" />
          </button>
          <p>Bebidas</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Tools} alt="" />
          </button>
          <p>Ferramentas</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Health} alt="" />
          </button>
          <p>Saúde</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Sports} alt="" />
          </button>
          <p>Esportes e Fitness</p>
        </li>

        <li className="content-itens">
          <button>
            <img src={Style} alt="" />
          </button>
          <p>Moda</p>
        </li>
      </ul>

      <section className="show-components">
        Produtos Relacionados
        {tecnologia && <Tech />}
      </section>
    </main>
  )
}

export default MainContent
