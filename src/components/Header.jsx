import React, { useState, useEffect } from 'react';
import {NavLink, Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import compare from '../images/compare.svg';
import wishlist from '../images/wishlist.svg';
import user from '../images/user.svg';
import cart from '../images/cart.svg';
import menu from '../images/menu.svg';
import MOCK_DATA from '../MOCK_DATA.json';


const Header = () => {
  const [searchList, setSearchList] = useState(MOCK_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {
    const Debounce = setTimeout(()=> {
      const filteredSearch = filterSearch(searchTerm, data);
      setSearchList(filteredSearch);
    }, 300);
    return () => clearTimeout(Debounce);
  },[searchTerm]); 
  
  return (
    <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">
Бесплатная Доставка Свыше 45.000тг и Бесплатный Возврат</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Горячая линия:
              <a className="text-white" href="tel: +7 (777) 777-77-77">+7 (777) 777-77-77</a></p>
          </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className="text-white">Astana Shop</Link>
              </h2>
          </div>
          <div className="col-5">
          <div className="input-group">
  <input value={searchTerm} type="text" className="form-control py-2" placeholder="Поиск товара" aria-label="Поиск товара" 
  
  aria-describedby="basic-addon2" onChange={(e)=> setSearchTerm(e.target.value)}/>
  
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-6"/></span>
  
    {searchList.map((product, index) => {
      return<div className='input-group' key={index}></div>
    })}
  
</div>

          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link to='/compare-product' className="d-flex align-items-center gap-10 text-white">
                <img src={compare} alt="compare"/>
                  <p className="mb-0">
                    Сравнение <br /> Товаров
                  </p>
                </Link>
              </div>
              <div>
                 <Link to='/wishlist' className="d-flex align-items-center gap-10 text-white">
                 <img src={wishlist} alt="wishlist"/>
                  <p className="mb-0">
                    Избранный <br /> лист
                  </p>
                 </Link>
              </div>
              <div>
                 <Link to='/login' className="d-flex align-items-center gap-10 text-white">
                 <img src={user} alt="user"/>
                  <p className="mb-0">
                    Авторизация в <br /> Аккаунт 
                  </p>
                 </Link>
              </div>
              <div>
                 <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                 <img src={cart} alt="cart"/>
                 <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">₸46.000</p>
                 </div>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className='dropdown'>
  <button 
  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
  type="button" 
  id="dropdownMenuButton1"
  data-bs-toggle="dropdown" 
  aria-expanded="false">
    <img src={menu} alt=''/>
    <span className='me-5 d-inline-block'>Категории</span>
  </button>
  <ul className="dropdown-menu"
  aria-labelledby="dropdownMenuButton1"
  >
    <li>
      <Link className="dropdown-item text-white" to="#">Action</Link>
      </li>
    <li>
      <Link className="dropdown-item text-white" to="#">Another action</Link>
      </li>
    <li>
      <Link className="dropdown-item text-white" to="#">Something else here</Link>
      </li>
  </ul>
</div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Начальная страница</NavLink>
                  <NavLink to="/product">Наш магазин</NavLink>
                  <NavLink to="/blogs">Блог</NavLink>
                  <NavLink to="/contact">Контакты</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header