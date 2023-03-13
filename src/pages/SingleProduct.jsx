import React, {useState} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';


const SingleProduct = () => {
    const props = { width: 400, height: 530, zoomWidth: 600, img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' }

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove()
    }
   
  return (
   <>
    <Meta title={'Наименование товара'}/>
    <BreadCrumb title='Наименование товара'/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                    <div className="main-product-image">
                        <div>
                            <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                        <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                        <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                        <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                        <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="main-product-details">
                        <div className='border-bottom'>
                        <h3 className='title'>Наушники разных оттенков цветов для детей и студентов</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className='price'>45.000₸</p>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>(2 отзыва)</p>
                            </div>
                            <a className='review-btn' href='#review'>Написать отзыв</a>
                        </div>
                        <div className="py-3">
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Тип :</h3><p className='product-data'>Часы</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                            <h3 className='product-heading'>Бренд :</h3><p className='product-data'>JBL</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Категория :</h3><p className='product-data'>Часы</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Тэг :</h3><p className='product-data'>Часы</p>
                            </div>
                            <div  className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Доступность :</h3><p className='product-data'>В наличии
</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Размер :</h3>
                            <div className='d-flex flex-wrap gap-15'>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                            </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Цвет :</h3><Color />
                            </div>
                            <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>Количество :</h3>
                            <div className=''>
                                <input type='number' 
                                name='' 
                                min={1}
                                max={10}
                                className='form-control'
                                style={{width: '70px'}}
                                id=''/>
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-10'>
                            <button className='button border-0' type='submit'>Добавить в корзину</button>
                                <button className='button signup'>Купить сейчас</button>
                            </div>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href=''>
                                        <TbGitCompare  className='fs-5 me-2'/>
                                    Добавить для сравнения
                                    </a>
                                </div>
                                <div>
                                    <a href=''>
                                        <AiOutlineHeart className='fs-5 me-2'/>
                                    Добавить в избранное
                                    </a>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column my-3'>
                            <h3 className='product-heading'>Доставка и возвраты :</h3><p className='product-data'>Бесплатная доставка и возврат всех заказов.<br/> Доставка в течении <b>3-5 рабочих дней.</b></p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading'>Скопировать ссылку на продукт :</h3>
                            <a href='javascript:void' onClick={()=>{copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg')}}> 
                        Скопируйте ссылку на товар
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <h4>Описание</h4>
                   <div className='bg-white p-3'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tellus nunc. Praesent sit amet lectus quis justo dignissim porta sit amet in dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                   </div>
                </div>
            </div>
    </Container>
    <Container class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <h3 id='review'>Отзывы</h3>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 id='review' className='mb-2'>
                                Отзывы клиентов</h4>
                      <div className='d-flex align-items-center gap-10'>
                      
                      </div>
                        </div>
                        {orderedProduct && (
                            <div>
                            <a className='text-dark text-decoration-underline' href=''>Написать отзыв</a>
                        </div>
                        )}
                    </div>
                    <div className='review-form py-4'>
                        <h4>
                        Написать отзыв
                        </h4>
                    <form action='' className='d-flex flex-column gap-15'>
                <div>
                <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={true}
                            activeColor="#ffd700"
                            />
                </div>
                  <div>
                    <textarea 
                    name='' 
                    id='' 
                    className='w-100 form-control' 
                    cols='30' 
                    rows='4'
                    placeholder='Комментарии'
                    >  
                    </textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button'>Отправить отзыв</button>
                  </div>
                </form>
                    </div>
                    <div className='reviews mt-4'>
                        <div className='review'>
                   <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Али</h6>
                    <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                            />
                   </div>
                            <p className='mt-3'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </Container>

    <Container class1='popular-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Популярные продукты</h3>
        </div>
       </div>
       <div className='row'>
        <ProductCard />
       </div>
  </Container>
   </>
  )
}

export default SingleProduct