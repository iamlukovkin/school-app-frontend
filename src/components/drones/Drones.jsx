import React from "react";

import first from './first.png';
import second from './second.png';
import third from './third.png';

export default function Drones() {

  const images = [first, second, third];
  return {
    title: "При обнаружении БПЛА",
    description: "Памятка населению о порядке действий населения при обнаружении беспилотных летательных аппаратов (БПЛА)",
    page: <div className="image-container">
      {images.map(current => (
        <img src={current} alt={'image'} />
      ))}
    </div>
  };
}
