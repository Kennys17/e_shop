import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';
import Container from '../components/Container';


const CompareProduct = () => {
  return (
   <>
   <Meta title={'Сравнение товаров'} />
   <BreadCrumb title='Сравнение товаров' />
   <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-3'>
          <div className='compare-product-card position-relative'>
            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
            <div className='product-card-image'>
            <img src='images/watch.jpg' alt='watch' />
            </div>
            <div className='compare-product-details'>
              <h5 className='title'>
                Honor T1 7.0 1 GB RAM 8GB ROM 3G Планшет
              </h5>
              <h6 className='price mb-3 mt-3'>45.000₸</h6>
              <div>
                <div className='product-detail'>
                  <h5>Бренд:</h5>
                  <p>Huawei</p>
                </div>
                <div className='product-detail'>
                  <h5>Тип:</h5>
                  <p>Планшет</p>
                </div>
                <div className='product-detail'>
                  <h5>SKU:</h5>
                  <p>SKU049</p>
                </div>
                <div className='product-detail'>
                  <h5>Доступность:</h5>
                  <p>В наличии</p>
                </div>
                <div className='product-detail'>
                  <h5>Цвет:</h5>
                  <Color />
                </div>
                <div className='product-detail'>
                  <h5>Размер:</h5>
                  <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='compare-product-card position-relative'>
            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
            <div className='product-card-image'>
            <img src='images/watch.jpg' alt='watch' />
            </div>
            <div className='compare-product-details'>
              <h5 className='title'>
                Honor T1 7.0 1 GB RAM 8GB ROM 3G Планшет
              </h5>
              <h6 className='price mb-3 mt-3'>45.000₸</h6>
              <div>
                <div className='product-detail'>
                  <h5>Бренд:</h5>
                  <p>Huawei</p>
                </div>
                <div className='product-detail'>
                  <h5>Тип:</h5>
                  <p>Планшет</p>
                </div>
                <div className='product-detail'>
                  <h5>SKU:</h5>
                  <p>SKU049</p>
                </div>
                <div className='product-detail'>
                  <h5>Доступность:</h5>
                  <p>В наличии</p>
                </div>
                <div className='product-detail'>
                  <h5>Цвет:</h5>
                  <Color />
                </div>
                <div className='product-detail'>
                  <h5>Размер:</h5>
                  <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Container>
   </>
  )
}

export default CompareProduct