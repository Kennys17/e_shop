import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
    <Meta title={'Блог'}/>
    <BreadCrumb title='Блог'/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <Link to='/blogs' className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-4' />
                            Вернуться к блогам</Link>
                        <h3 className='title'>
                        Прекрасное воскресное утро
                        </h3>
                        <img src={blog} className='img-fluid w-100 my-4' alt='blog' />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet erat ante, non cursus turpis facilisis a. Vivamus sed mollis turpis. Etiam eget nisl in mi dictum vulputate nec posuere elit. Proin nec purus sed libero malesuada mollis. Integer sed aliquet tortor. Vivamus hendrerit porta orci nec malesuada. Curabitur dapibus nisl convallis velit iaculis feugiat. Quisque consequat accumsan dui eget tempor.
                        </p>
                    </div>
                </div>
            </div>
     </Container>
    </>
  )
}

export default SingleBlog