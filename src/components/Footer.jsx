import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';
import newsletter from '../images/newsletter.png';

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newsletter} alt='newsletter' />
              <h2 className='mb-0 text-white'>Подписаться на рассылку</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className='input-group'>
  <input 
  type="text" 
  className='form-control py-2' 
  placeholder='Ваш электронный адрес' 
  aria-label='Ваш электронный адрес' 
  aria-describedby="basic-addon2"/>
  <span className='input-group-text p-3' id='basic-addon2'>
    Подписаться
  </span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Расположение</h4>
             <div>
              <address className='text-white fs-6'>
                Astana Shop<br/>г.Астана: ул.Сыганак 1111<br/>Казахстан<br/>
                010000
              </address>
              <a href='tel:+7(777) 777-7777' className='mt-3 d-block mb-1 text-white'>+7(777) 777-77-77</a>
              <a href='mailto:astana.shop@gmail.com' className='mt-2 d-block mb-0 text-white'>astana.shop@gmail.com</a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href='#'><BsLinkedin className='fs-4'/></a>
                <a className='text-white' href='#'><BsInstagram className='fs-4' /></a>
                <a className='text-white' href='#'><BsGithub className='fs-4'/></a>
                <a className='text-white' href='#'><BsYoutube  className='fs-4'/></a>
                
              </div>
             </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Информация</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Политика конфиденциальности</Link>
                <Link to="/refund-policy" className='text-white py-2 mb-1'>Политика возврата</Link>
                <Link to="/shipping-policy" className='text-white py-2 mb-1'>Политика доставки</Link>
                <Link to="/term-conditions" className='text-white py-2 mb-1'>Условия обслуживания</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Аккаунт</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Поиск</Link>
                <Link className='text-white py-2 mb-1'>О нас</Link>
                <Link className='text-white py-2 mb-1'>Обратная связь</Link>
                <Link className='text-white py-2 mb-1'>Книга жалоб</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Быстрые ссылки</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Ноутбуки</Link>
                <Link className='text-white py-2 mb-1'>Наушники</Link>
                <Link className='text-white py-2 mb-1'>Планшеты</Link>
                <Link className='text-white py-2 mb-1'>Часы</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
             <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Project by Kenessov Zhassulan</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer