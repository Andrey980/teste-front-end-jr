import React, { useState } from 'react'

import '../content.scss'
import Close from '../assets/Close.svg'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'

function Modal({ product, modalOpen, closeModal }) {
  if (!modalOpen) return null
  const [value, setValue] = useState(1)

  return (
    <div className="modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <img
          src={product.photo}
          alt={product.productName}
          className="modal-img"
        />
        <div className="wrap">
          <h2>{product.productName}</h2>
          <p className="modal-price">R$ {product.price}</p>
          <p className="modal-description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <p className="modal-moreInfo">Veja mais detalhe do produto {'>'}</p>
          <div className="modal-counter">
            <button
              onClick={() =>
                value > 1 ? setValue(value - 1) : setValue(value - 0)
              }
            >
              <img src={Minus} alt="" />
            </button>
            {value}
            <button onClick={() => setValue(value + 1)}>
              <img src={Plus} alt="" />
            </button>
          </div>

          <button className="close-modal" onClick={closeModal}>
            Comprar
          </button>
          <img
            src={Close}
            alt="fechar"
            className="close-button"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
