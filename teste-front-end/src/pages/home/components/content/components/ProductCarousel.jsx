import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import useFetch from '../../../../../hooks/useFetch'
import Modal from './Modal'

function ProductCarousel() {
  const { data, error } = useFetch(
    `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`,
    'GET'
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = product => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setModalOpen(false)
  }

  return (
    <>
      {data ? (
        <>
          <Slider {...settings} className="slider">
            {data.products.map((result, index) => (
              <div className="card" key={result.productName}>
                <div className="product-itens">
                  <img src={result.photo} alt="" />
                  <div>
                    <h3>{result.productName}</h3>
                    <p className="price">R$ {result.price}</p>
                    <p className="subtitle">ou 2x de R$ 49,95 sem juros</p>
                    <p className="shipping">Frete grátis</p>
                  </div>
                  <button onClick={() => openModal(result)}>Comprar</button>
                </div>
              </div>
            ))}
          </Slider>
          {selectedProduct && (
            <Modal
              product={selectedProduct}
              modalOpen={modalOpen}
              closeModal={closeModal}
            />
          )}
        </>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  )
}

export default ProductCarousel
