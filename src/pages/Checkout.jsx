import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack} from 'react-icons/bi';
import watch from '../images/watch.jpg';
import Container from '../components/Container';
const Checkout = () => {
  return (
   <>
   <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-7">
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Astana Shop</h3>
                    <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link className='text-dark total-price' to='/cart'>Корзина</Link></li> &nbsp; /
    <li className="breadcrumb-item total-price active" aria-current="page">Информация</li>&nbsp; /
    <li className="breadcrumb-item total-price active">Доставка</li> &nbsp;/
    <li className="breadcrumb-item total-price active" aria-current="page">Оплата</li>
  </ol>
</nav>
    <h4 className='title total'>Контактная информация</h4>
    <p className='user-details total'>
        Kenessov Zhassulan (kenessov.zhassulan.93@gmail.com)
    </p>
    <h4 className='mb-3'>Адрес доставки</h4>
    <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
        <div className='w-100'>
            <select name='' 
                    className='form-control form-select' 
                    id=''>
                        <option value='' selected disabled>
                            Выберите Страну
                        </option>
                    </select>
        </div>
        <div className='flex-grow-1'>
            <input type='text' placeholder='Имя' className='form-control' />
        </div>
        <div className='flex-grow-1'>
            <input type='text' placeholder='Фамилия' className='form-control' />
        </div>
        <div className='w-100'>
            <input type='text' placeholder='Улица' className='form-control' />
        </div>
        <div className='w-100'>
            <input type='text' placeholder='Дом' className='form-control' />
        </div>
        <div className='flex-grow-1'>
        <input type='text' placeholder='Город' className='form-control' />
        </div>
        <div className='flex-grow-1'>
        <select name='' 
                    className='form-control form-select' 
                    id=''>
                        <option value='' selected disabled>Выберите Область</option>
                    </select>
        </div>
        <div className='flex-grow-1'>
        <input type='text' placeholder='ZIP-код' className='form-control' />
        </div>
        <div className="w-100">
            <div className="d-flex justify-content-between align-items-center">
                <Link to='/cart' className='text-dark'>
                    <BiArrowBack className='me-2'/>
                    Вернуться в корзину</Link>
                <Link to='/cart' className='button'>Продолжить доставку</Link>
            </div>
        </div>
    </form>
                </div>
            </div>
            <div className="col-5">
                <div className='border-bottom py-4'>
                   <div className='d-flex gap-10 mb-2 align-items-center'>
                   <div className='w-75 d-flex gap-10'>
                        <div className='w-25 position-relative'>
                            <span 
                            style={{ top: '-10px', right: '2px' }} 
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                            <img className='img-fluid' src={watch} alt="product" />
                            </div>
                    <div>
                        <h5 className="total-price">dawdawdaw</h5>
                        <p className='total-price'> S / #a7a8b9</p>
                    </div>
                    </div>
                    <div className='flex-grow-1'>
                        <h5 className='total'>45.000₸</h5>
                    </div>
                   </div>
                </div>
                <div className='border-bottom py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='total'>Промежуточный итог</p>
                    <p className='total-price'>45.000₸</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0 total'>Доставка</p>
                    <p className='mb-0 total-price'>1000₸</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                    <h4 className='total'>Общая сумма</h4>
                    <h5 className='total-price'>46.000₸</h5>
                </div>
            </div>
        </div>
   </Container>
   </>
  )
}

export default Checkout