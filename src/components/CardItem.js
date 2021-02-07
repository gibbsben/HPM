import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap' >
          <h2> {props.text}</h2>
            <img
              className='cards__item__img'
              alt='Team member'
              src={props.src}
            /> 

               

          </figure> 
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
