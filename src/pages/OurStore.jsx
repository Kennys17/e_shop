import React, {useState} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color'; 
import Container from '../components/Container';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
 
  
  return (
 <>
 <Meta title={'Наш магазин'}/>
  <BreadCrumb title='Наш магазин'/>
  <Container class1='store-wrapper home-wrapper-2 py-5'>
      <div className='row'>
        <div className='col-3'>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>

            </h3>
          </div>
          <div className='filter-card mb-3'>
          <h3 className='filter-title'>Категории</h3>
          <div>
            <ul className='ps-0'>
              <li>Часы</li>
              <li>Телевизоры</li>
              <li>Камеры</li>
              <li>Ноутбуки</li>
            </ul>
          </div>
          </div>
          <div className='filter-card mb-3'>
          <h3 className='filter-title'>Сортировать по</h3>
          <div>
            <h5 className='sub-title'>Доступности</h5>
            <div>
            <div className='form-check'>
              <input className='form-check-input' 
              type='checkbox' 
              value=''
               id=''
               />
              <label className='form-check-label' htmlFor=''>
                В наличии (1)
              </label>
            </div>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox'
               value='' 
               id=''
               checked/>
              <label className='form-check-label' htmlFor=''>
                Нет в наличии(0)
              </label>
            </div>
            </div>
            <h5 className='sub-title'>Цене</h5>
              <div className='d-flex align-items-center gap-10'>
                <div className='form-floating'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInput'
                    placeholder='От'
                    />
                    <label htmlFor='floatingInput'>От</label>
                </div>
                <div className='form-floating'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInput1'
                    placeholder='До'
                    />
                    <label htmlFor='floatingInput1'>До</label>
                </div>
                </div>
                <h5 className='sub-title'>Цвету</h5>
                <div>
                  <Color />
                </div>
                <h5 className='sub-title'>Размеру</h5>
                <div>
                  <div className='form-check'>
                    <input
                       className='form-check-input'
                       type='checkbox'
                       value=''
                       id='color-1'
                       />
                       <label className='form-check-label' htmlFor='color-1'>
                        S (2)
                       </label>
                  </div>
                  <div className='form-check'>
                    <input
                       className='form-check-input'
                       type='checkbox'
                       value=''
                       id='color-2'
                       />
                       <label className='form-check-label' htmlFor='color-2'>
                        M (2)
                       </label>
                  </div>
                </div>
          </div>
          </div>
          <div className='filter-card mb-3'>
          <h3 className='filter-title'>Теги товаров</h3>
          <div>
            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Наушники</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Ноутбук</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>iPhone</span>
              <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Колонки</span>
            </div>
          </div>
          </div>
          <div className='filter-card mb-3'>
          <h3 className='filter-title'>Случайные продукты</h3>
           <div>
            <div className='random-products mb-3 d-flex'>
              <div className='w-50'>
                <img src='images/watch.jpg' className='img-fluid' alt='watch' />
              </div>
              <div className='w-50'>
                <h5>
                  Наушники в 10 оттенках цвета для детей и студентов
                </h5>
                <ReactStars
               count={5}
               size={24}
               value={4}
               edit={false}
               activeColor="#ffd700"
               />
                <b>135.000₸</b>
              </div>
            </div>
            <div className='random-products d-flex'>
              <div className='w-50'>
                <img src='images/watch.jpg' className='img-fluid' alt='watch' />
              </div>
              <div className='w-50'>
                <h5>
                  Наушники в 10 оттенках цвета для детей и студентов
                </h5>
                <ReactStars
               count={5}
               size={24}
               value={4}
               edit={false}
               activeColor="#ffd700"
               />
                <b>135.000₸</b>
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='filter-sort-grid mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-10'>
              <p className='mb-0 d-block' style={{width:'200px'}}>
                Сортировать по:
                </p>
              <select 
              name='' 
              className='form-control form-select' 
              id=''
              >
                <option value='manual'>рекомендованным</option>
                <option value='best-selling' selected='selected'>самым продаваемым</option>
                <option value='title-ascending'>алфавиту, от А до Я</option>
                <option value='title-descending'>алфавиту, от Я до А</option>
                <option value='price-ascending'>возрастанию цены</option>
                <option value='price-descending'>убыванию цены</option>
                <option value='created-ascending'>дате, от старой к новой</option>
                <option value='created-descending'>дате, от новой к старой</option>
              </select>
            </div>
            <div>
              <div className='d-flex align-items-center gap-10'>
                <p className='totalproducts mb-0'>21 Товар</p>
                <div className='d-flex gap-10 align-items-center grid'>
                  <img onClick={()=> {
                    setGrid(3)
                  }} src='images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                  <img onClick={()=> {
                    setGrid(4)
                  }} src='images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                  <img onClick={()=> {
                    setGrid(6)
                  }} src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                  <img onClick={()=> {
                    setGrid(12)
                  }} src='images/gr.svg' className='d-block img-fluid' alt='grid'/>
                </div>
              </div>
            </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
              <ProductCard grid={grid} /> 
              </div>
            </div>
          </div>

        </div>
      </div>
  </Container>
 </>
  )
}

export default OurStore
