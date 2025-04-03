import first from './1.jpg'
import second from './2.jpg'
import third from './3.jpg'
import fourth from './4.jpg'
import fifth from './5.jpg'
import sixth from './6.jpg'
import seventh from './7.jpg'
import eigth from './8.jpg'
import ninth from './9.jpg'

export default function ScooterRules() {

  const images = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth];

  return {
    title: 'Самокаты - правила вождения',
    description: 'Основные правила поведения при вождении электросамокатов',
    page: (<div className='image-container'>
      {images.map(image => <img src={image} alt='scooter-image' />)}
    </div>)
  };
}
