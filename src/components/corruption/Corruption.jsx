import React from "react";
import image from './image.jpeg';
import './corruption.css';

export default function Corruption() {

  return {
    title: "Антикоррупция",
    description: "Антикоррупционый комитет Рязанской области",
    page: <>
      <img src={image} alt={'image'} />
      <p>
        <b>Контактный телефон:</b> 8(4912)44-18-22
        <br /><b>Телефон горячей линии по вопросам противодействия коррупции:</b> 8(4912)55-18-27
        <br /><b>Адрес электронной почты:</b> akro@ryazan.gov.ru
      </p>
    </>
  }
}
