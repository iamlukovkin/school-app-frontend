import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import fourth from './4.jpg';
import fifth from './5.jpg';
import sixth from './6.jpg';
import seventh from './7.jpg';
import eighth from './8.jpg';
import ninth from './9.jpg';


export default function SafetyNetwork() {

  const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];

  return {
    title: "Безопасный интернет",
    description: "Правила поведения в виртуальном пространстве",
    page: (<>
      <h1>{SafetyNetwork.title}</h1>
      <h2>{SafetyNetwork.description}</h2>
      <div className={'images'}>
        {images.map(current => (
          <img src={current} alt={'current'} />
        ))}
      </div>
    </>)
  };
}
