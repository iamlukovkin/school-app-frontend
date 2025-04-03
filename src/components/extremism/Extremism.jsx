import firstImage from './1.jpg';
import secondImage from './2.jpg';
import thirdImage from './3.jpg';
import fourthImage from './4.jpg';
import fifthImage from './5.jpg';
import sixthImage from './6.jpg';

export default function Extremism() {

  const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage];

  return {
    title: "QR-коды против экстремизма",
    description: "Узнай об ответственности за экстремистскую деятельность в Российской Федерации",
    page: (<>
      <div className="image-container">
        {images.map((image, index) => {
          return <img key={index} src={image} alt={Extremism.title} />
        })}
      </div>
    </>)
  };
}
