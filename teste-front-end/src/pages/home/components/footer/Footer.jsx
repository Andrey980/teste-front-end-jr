import React from 'react'

import './footer.scss'
import Facebook from './assets/Facebook.svg'
import Instagram from './assets/Instagram.svg'
import Youtube from './assets/Youtube.svg'
import Alelo from './assets/alelo.svg'
import Amex from './assets/amex.svg'
import Dinners from './assets/dinners.svg'
import Elo from './assets/elo.svg'
import Ifood from './assets/ifood.svg'
import Mastercard from './assets/mastercard.svg'
import Pix from './assets/pix.svg'
import Sodexo from './assets/sodexo.svg'
import Ticket from './assets/ticket.svg'
import Visa from './assets/visa.svg'
import Econverse from './assets/Econverse.svg'
import Vtex from './assets/Vtex.svg'

function Footer() {
  return (
    <footer>
      <section className="container">
        <div className="informations-container">
          <article className="about">
            <h2>Sobre nós</h2>
            <ul className="about-itens">
              <li>Conheça</li>
              <li>Como comprar</li>
              <li>Indicação e desconto</li>
            </ul>

            <ul className="icons">
              <li>
                <img src={Facebook} alt="" />
              </li>
              <li>
                <img src={Instagram} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
            </ul>
          </article>

          <article className="info">
            <h2>Informações úteis</h2>
            <ul className="info-itens">
              <li>FALE CONOSCO</li>
              <li>DÚVIDAS</li>
              <li>Prazos de Entrega</li>
              <li>Formas de Pagamento</li>
              <li>Política de privacidade</li>
              <li>Trocas e Devoluções</li>
            </ul>
          </article>

          <article className="payment">
            <h2>Formas de Pagamentos</h2>
            <ul className="payment-container">
              <li>
                <img src={Visa} alt="" />
              </li>
              <li>
                <img src={Elo} alt="" />
              </li>
              <li>
                <img src={Alelo} alt="" />
              </li>
              <li>
                <img src={Dinners} alt="" />
              </li>
              <li>
                <img src={Ifood} alt="" />
              </li>
              <li>
                <img src={Mastercard} alt="" />
              </li>
              <li>
                <img src={Pix} alt="" />
              </li>
              <li>
                <img src={Amex} alt="" />
              </li>
              <li>
                <img src={Ticket} alt="" />
              </li>
              <li>
                <img src={Sodexo} alt="" />
              </li>
            </ul>
          </article>
        </div>

        <article className="cadastro">
          <h1>
            Cadastre-se e receba nossas <span>Novidades e promoções</span>
          </h1>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div className="forms">
            <input type="text" placeholder="SEU E-MAIL" />
            <button>Ok</button>
          </div>
        </article>
      </section>

      <section className="copyright">
        <article className="copyright-container">
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <div>
            <img src={Econverse} alt="" />
            <img src={Vtex} alt="" />
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer
