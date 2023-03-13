import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
    <Meta title={"Контакты"} />
    <BreadCrumb title="Контакты"/>
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160182.53790870286!2d71.33930806011814!3d51.1480774221204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb19228!2z0JDRgdGC0LDQvdCwIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1677130338356!5m2!1sru!2skz" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Контакты</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='ФИО'/>
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Номер телефона'/>
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
                  <div>
                    <button className='button'>Отправить</button>
                  </div>
                </form>
              </div>
              <div>
              <h3 className='contact-title mb-4'>Cвяжитесь с нами</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/>
                  <address className='mb-0'>
                    Казахстан: г.Астана,ул.Сыганак 1111, 010000
                  </address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/>
                  <a href='tel:+7(777) 777-77-77'>+7 (777) 777-77-77</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/>
                  <a href='mailto:astana.shop@gmail.com'>astana.shop@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/>
                  <p className='mb-0'>Пн-Пт 9:00-18:00</p>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            </div> 
        </div>
    </Container>
    </>
  )
}

export default Contact