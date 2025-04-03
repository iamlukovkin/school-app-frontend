import firstImage from './main.png';
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import fourth from './4.jpg';
import fifth from './5.jpg';
import sixth from './6.jpg';
import seventh from './7.jpg';
import eighth from './8.jpg';
import ninth from './9.jpg';
import tenth from './10.jpg';
import eleventh from './11.jpg';
import twelfth from './12.jpg';
import thirteenth from './13.jpg';

export default function Scammers() {

  const images = [
    first,
    third,
    fourth,
    seventh,
    ninth,
    tenth,
    eleventh,
    twelfth,
    thirteenth
  ];

  return {
    title: "Осторожно, мошенники!",
    description: "Будьте бдительны и не дайте себя обмануть",
    page: (<>
      <h1>{Scammers.title}</h1>
      <h2>{Scammers.description}</h2>
      <img src={firstImage} alt={'first-image'} />
      <p>Мошенники используют множество поводов для обмана людей, различные методы, чтобы получить доступ к личным
        данным: звонки, сообщения в социальных сетях или электронные письма. Искусственный интеллект способен
        сгенерировать голос и даже изображение вашего родственника, друга. Если звонящий заводит речь о ваших
        финансах, пин-кодах из СМС, номерах банковских карт и персональных данных – не втягивайтесь в разговор.
        ПОЛОЖИТЕ ТРУБКУ и ваши деньги останутся в сохранности.</p>
      <p>Будьте бдительны и не дайте себя обмануть!</p>
      <div>
        <div className='image-container'>
          <img src={second} alt={'current'} />
          <img src={eighth} alt={'current'} />
          <img src={fifth} alt={'current'} />
          <img src={sixth} alt={'current'} />
        </div>
        <div className='image-container'>
          {images.map(current => (
            <img src={current} alt={'current'} />
          ))}
        </div>
      </div>
    </>)
  };
}
