import firstImage from './1.jpg';
import secondImage from './2.jpg';

export default function HelpPhones() {
  return {
    title: "Телефон доверия",
    description: "Бесплатная горячая линия",
    page: (<>
      <h1>{HelpPhones.title}</h1>
      <h2>{HelpPhones.description}</h2>
      <div className={'images'}>
        <img src={firstImage} alt={'first-image'} />
        <img src={secondImage} alt={'second-image'} />
      </div>
    </>)
  };
}
