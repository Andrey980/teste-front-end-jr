import React from 'react'
import './header.scss'

import Shield from './assets/Shield.svg'
import Truck from './assets/Truck.svg'
import CreditCard from './assets/CreditCard.svg'
import Logo from './assets/LogoImg.svg'
import Glass from './assets/MagnifyingGlass.svg'
import Box from './assets/Box.svg'
import Heart from './assets/Heart.svg'
import User from './assets/UserCircle.svg'
import Cart from './assets/ShoppingCart.svg'

function index() {
  return (
    <header id="header">
      <section className="featured-banner">
        <ul>
          <li className="banner-itens">
            <img src={Shield} alt="Compra Segura" />
            <p>
              Compra <span>100% segura</span>
            </p>
          </li>

          <li className="banner-itens">
            <img src={Truck} alt="Frete" />
            <p>
              Frete grátis <span>acima de R$ 200</span>
            </p>
          </li>

          <li className="banner-itens">
            <img src={CreditCard} alt="Parcele" />
            <p>
              Parcele <span>suas compras</span>
            </p>
          </li>
        </ul>
      </section>

      <section className="navegation">
        <logo id="logo">
          <img src={Logo} alt="" />
          <span>vtex</span>
        </logo>

        <nav>
          <input type="text" placeholder="O que você está procurando?" />
          <button>
            <img src={Glass} alt="" />
          </button>
        </nav>

        <div className="icons">
          <ul>
            <li className="icons-itens">
              <button>
                <img src={Box} alt="" />
              </button>
            </li>
            <li className="icons-itens">
              <button>
                <img src={Heart} alt="" />
              </button>
            </li>
            <li className="icons-itens">
              <button>
                <img src={User} alt="" />
              </button>
            </li>
            <li className="icons-itens">
              <button>
                <img src={Cart} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default index
